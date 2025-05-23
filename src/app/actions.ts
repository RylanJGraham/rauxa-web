
"use server";

import { z } from "zod";
import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  Timestamp,
  FirestoreError
} from "firebase/firestore";

const emailSchema = z.string().email({ message: "Please enter a valid email address." });

export interface FormState {
  message: string | null;
  error: string | null;
  submittedEmail?: string | null;
}

export async function subscribeToNewsletter(
  prevState: FormState | undefined,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email");
  const rawEmailString = email?.toString();

  try {
    const validatedEmail = emailSchema.parse(email);

    const waitlistRef = collection(db, "waitlist");
    const q = query(waitlistRef, where("email", "==", validatedEmail));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return {
        message: null,
        error: "This email is already on the waitlist.",
        submittedEmail: validatedEmail
      };
    }

    // Add to Firestore
    await addDoc(waitlistRef, {
      email: validatedEmail,
      createdAt: Timestamp.now()
    });

    // Add to Brevo
    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.error("BREVO_API_KEY is not set in the environment. Skipping Brevo contact creation.");
      // Still return a success for Firestore, but warn about Brevo.
      return {
        message: "Subscribed to waitlist (Firestore only - Brevo integration skipped: API key missing).",
        error: null, // Not an error for the user, but an operational warning.
        submittedEmail: validatedEmail
      };
    }

    const brevoPayload = {
      email: validatedEmail,
      listIds: [6], // Rauxa Beta Signup list ID
      updateEnabled: true,
    };

    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(brevoPayload)
    });

    if (!brevoResponse.ok) {
      const errorBody = await brevoResponse.text();
      console.error(`Brevo API Error (${brevoResponse.status} ${brevoResponse.statusText}):`, errorBody);
      return {
        message: null,
        error: `Subscribed to waitlist, but failed to add to mailing list (Brevo). Status: ${brevoResponse.statusText}. Please check your Brevo API key and permissions.`,
        submittedEmail: validatedEmail,
      };
    }

    return {
      message: "You're subscribed! We'll keep you posted.",
      error: null,
      submittedEmail: validatedEmail
    };

  } catch (e) {
    if (e instanceof z.ZodError) {
      return {
        message: null,
        error: e.errors[0].message,
        submittedEmail: rawEmailString
      };
    }

    if (e instanceof FirestoreError) {
      console.error("Firestore Error:", e.code, e.message);
      if (e.code === 'permission-denied') {
        return {
          message: null,
          error: "Error subscribing: Permission denied. Please check server logs or Firestore rules.",
          submittedEmail: rawEmailString
        };
      }
      return {
        message: null,
        error: `Error subscribing: A database error occurred (${e.code}).`,
        submittedEmail: rawEmailString
      };
    }
    
    console.error("Waitlist subscription error (unexpected):", e);
    return {
      message: null,
      error: "Oops! An unexpected error occurred while joining the waitlist. Please try again.",
      submittedEmail: rawEmailString
    };
  }
}
