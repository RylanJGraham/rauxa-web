
"use server";

import { z } from "zod";
import { db } from '@/lib/firebase'; // Import db from our new firebase config
import { collection, addDoc, query, where, getDocs, Timestamp } from "firebase/firestore";

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
    console.log("Attempting to subscribe email to Firestore:", validatedEmail);

    const subscribersRef = collection(db, "newsletter_subscribers");
    
    // Check if email already exists
    const q = query(subscribersRef, where("email", "==", validatedEmail));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { message: null, error: "This email is already subscribed.", submittedEmail: validatedEmail };
    }

    // Add a new document with a generated id.
    await addDoc(subscribersRef, {
      email: validatedEmail,
      subscribedAt: Timestamp.now(), // Use Firestore Timestamp for consistency
    });
    console.log("Successfully subscribed email to Firestore:", validatedEmail);
    return { message: "Thank you for subscribing! We'll keep you posted.", error: null, submittedEmail: validatedEmail };

  } catch (e) {
    if (e instanceof z.ZodError) {
      return { message: null, error: e.errors[0].message, submittedEmail: rawEmailString };
    }
    
    console.error("Newsletter subscription error:", e);
    
    // Check for specific Firebase error codes if needed, e.g., permission denied
    // For example: if (e.code === 'permission-denied') { ... }
    
    return { message: null, error: "An unexpected error occurred while subscribing. Please try again later.", submittedEmail: rawEmailString };
  }
}
