
"use client";

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { subscribeToNewsletter, type FormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Mail, CheckCircle, AlertTriangle } from 'lucide-react';

const initialState: FormState = {
  message: null,
  error: null,
  submittedEmail: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-base px-6 py-3 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      {pending ? 'Subscribing...' : 'Subscribe Now'}
      {!pending && <Mail className="ml-2 h-5 w-5" />}
    </Button>
  );
}

const NewsletterSection = () => {
  const [state, formAction] = useActionState(subscribeToNewsletter, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null); // Ref for the form

  useEffect(() => {
    console.log("NewsletterSection useEffect triggered. Current state:", state); // For debugging

    // Ensure state is not null and has a message or error before processing
    if (state && (state.message || state.error)) {
      if (state.message) {
        let toastDescription = state.message;
        if (state.submittedEmail) {
          toastDescription += ` Email: ${state.submittedEmail}.`;
        }
        toast({
          title: "Success!",
          description: toastDescription,
          variant: 'default',
          action: <CheckCircle className="text-green-500" />,
        });
        formRef.current?.reset(); // Reset the form on success
      } else if (state.error) {
        let toastDescription = state.error;
        if (state.submittedEmail) {
          toastDescription += ` Attempted with: ${state.submittedEmail}.`;
        }
        toast({
          title: "Oops!",
          description: toastDescription,
          variant: 'destructive',
          action: <AlertTriangle className="text-yellow-500" />,
        });
      }
    }
  }, [state]); // Dependency array ensures this runs when 'state' changes

  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Be the First to Hear About Our Launch!
        </h2>
        <p className="text-lg sm:text-xl mb-10 max-w-xl mx-auto text-secondary-foreground/90">
          Join our community and get exclusive updates, early access, and special launch day surprises.
        </p>
        <form ref={formRef} action={formAction} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="flex-grow bg-background/90 text-foreground placeholder:text-muted-foreground border-border focus:ring-accent focus:border-accent rounded-lg text-base p-3"
              aria-label="Email address for newsletter"
            />
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
