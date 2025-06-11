"use client";
import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  branchTitle: string;
}

export function ContactForm({ branchTitle }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setFormStatus({
        type: "success",
        message: "Thank you for your message. We will get back to you soon!",
      });
      form.reset();
    } catch (error: unknown) {
      console.error(error);
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full p-6 flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-[#018D43]">
        Contact {branchTitle}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          className="bg-white/80"
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-white/80"
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="bg-white/80"
          required
        />
        <textarea
          name="message"
          className="w-full h-32 rounded-lg p-3 bg-white/80 border border-gray-200"
          placeholder="Your Message"
          required
        />
        <input type="hidden" name="branch" value={branchTitle} />
        {formStatus.message && (
          <div
            className={`p-3 rounded-lg ${
              formStatus.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {formStatus.message}
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-[#018D43] hover:bg-[#002d70] text-white mt-auto"
          disabled={isSubmitting}
        >
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
