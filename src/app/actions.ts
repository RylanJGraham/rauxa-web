
"use server";

import { z } from "zod";
import { db } from '@/lib/firebase'; // Import db from our new firebase config
import { collection, addDoc, query, where, getDocs, Timestamp, FirestoreError } from "firebase/firestore";

const emailSchema = z.string().email({ message: "Please enter a valid email address." });

// Export FormState so it can be used by the client component
export interface FormState {
  message: string | null;
  error: string | null;
  submittedEmail?: string | null; // To hold the email that was processed
}

export async function subscribeToNewsletter(prevState: FormState | undefined, formData: FormData): Promise<FormState> {
  const email = formData.get("email");
  const rawEmailString = email?.toString();

  try {
    const validatedEmail = emailSchema.parse(email);
    console.log("Attempting to add email to waitlist in Firestore:", validatedEmail);

    const waitlistRef = collection(db, "waitlist");
    
    // Check if email already exists
    const q = query(waitlistRef, where("email", "==", validatedEmail));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { message: null, error: "This email is already on the waitlist.", submittedEmail: validatedEmail };
    }

    // Add a new document with a generated id.
    await addDoc(waitlistRef, {
      email: validatedEmail,
      createdAt: Timestamp.now(), // Use Firestore Timestamp for consistency
    });
    console.log("Successfully added email to waitlist in Firestore:", validatedEmail);
    return { message: "Thank you for joining the waitlist! We'll keep you posted.", error: null, submittedEmail: validatedEmail };

  } catch (e) {
    if (e instanceof z.ZodError) {
      return { message: null, error: e.errors[0].message, submittedEmail: rawEmailString };
    }
    
    console.error("Waitlist subscription error:", e);
    
    if (e instanceof FirestoreError && e.code === 'permission-denied') {
      return { 
        message: null, 
        error: "Permission denied. Please check your Firestore security rules to ensure reads and writes are allowed for the 'waitlist' collection.", 
        submittedEmail: rawEmailString 
      };
    }
    
    return { 
      message: null, 
      error: "An unexpected error occurred while joining the waitlist. Please try again later.", 
      submittedEmail: rawEmailString 
    };
  }
}

