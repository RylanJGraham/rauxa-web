
"use server";

import { z } from "zod";

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
    // Here you would typically send the email to your newsletter service
    // For example, using an API call to Mailchimp, SendGrid, etc.
    console.log("New newsletter subscription attempt for:", validatedEmail);
    
    // Simulate API call success/failure
    if (validatedEmail.endsWith('fail.com')) { // For testing error states
        return { message: null, error: "This email address could not be subscribed. Please try another.", submittedEmail: validatedEmail };
    }

    return { message: "Thank you for subscribing! We'll keep you posted.", error: null, submittedEmail: validatedEmail };
  } catch (e) {
    if (e instanceof z.ZodError) {
      return { message: null, error: e.errors[0].message, submittedEmail: rawEmailString };
    }
    console.error("Newsletter subscription error:", e);
    return { message: null, error: "An unexpected error occurred. Please try again later.", submittedEmail: rawEmailString };
  }
}
