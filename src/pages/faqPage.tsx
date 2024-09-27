import * as React from "react";
import { HelpCircle } from "lucide-react";

export const FaqPage = () => {
  return (
    <div className="text-slate-700 flex flex-col items-center p-5">
      <h1 className="text-5xl font-light h-16 gradientDefault mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-base mb-6 mt-5">
        Find answers to common questions about our app and services.
      </p>

      <div className="w-full max-w-2xl">
        <div className="border-b border-slate-300 py-4">
          <h2 className="flex items-center">
            <HelpCircle size={18} className="mr-2" />
            What is this app about?
          </h2>
          <p className="mt-5 text-slate-500">
            This app provides users with the latest news and insights tailored
            to their interests, making it easy to stay informed.
          </p>
        </div>

        <div className="border-b border-slate-300 py-4">
          <h2 className="flex items-center">
            <HelpCircle size={18} className="mr-2" />
            How do I create an account?
          </h2>
          <p className="mt-5 text-slate-500">
            You can create an account by clicking the "Sign Up" button on the
            home page and following the prompts to enter your information.
          </p>
        </div>

        <div className="border-b border-slate-300 py-4">
          <h2 className="flex items-center">
            <HelpCircle size={18} className="mr-2" />
            Can I customize my news feed?
          </h2>
          <p className="mt-5 text-slate-500">
            Yes! You can customize your news feed by selecting your preferred
            topics and sources in the settings section.
          </p>
        </div>

        <div className="border-b border-slate-300 py-4">
          <h2 className="flex items-center">
            <HelpCircle size={18} className="mr-2" />
            How do I reset my password?
          </h2>
          <p className="mt-5 text-slate-500">
            To reset your password, go to the login page and click on "Forgot
            Password?" to receive instructions via email.
          </p>
        </div>

        <div className="border-b border-slate-300 py-4">
          <h2 className="flex items-center">
            <HelpCircle size={18} className="mr-2" />
            Who can I contact for support?
          </h2>
          <p className="mt-5 text-slate-500">
            If you need support, you can reach out to our support team through
            the "Contact Us" page or email support@example.com.
          </p>
        </div>

        <div className="border-b border-slate-300 py-4">
          <h2 className="flex items-center">
            <HelpCircle size={18} className="mr-2" />
            Is my data safe with you?
          </h2>
          <p className="mt-5 text-slate-500">
            Yes, we take your privacy seriously. We use advanced security
            measures to protect your data and ensure it is kept confidential.
          </p>
        </div>
      </div>
    </div>
  );
};
