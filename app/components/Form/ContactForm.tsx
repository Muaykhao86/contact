"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendMessage } from "@/app/components/Form/actions";

const initialState = {
  message: "",
  status: "",
};
interface statedata {
  message: string;
  status: string;
}
function SubmitButton(statedata: statedata) {
  const { pending, data } = useFormStatus();
  console.log('data', data);
  const status = statedata?.status;
  const sent = status === "success";
  const disabled = pending || sent;
  return (
    <button
      type="submit"
      className={`${sent && 'sent'}`}
      aria-disabled={disabled}
      disabled={disabled}>
      {pending ?
        "Sending..."
        : sent ?
          "Message Sent!"
          : "Send Message"
      }
    </button>
  );
}

export const ContactForm: React.FC = () => {
  const [state, formAction] = useFormState(sendMessage, initialState);
  return (
    <form action={formAction}>
      <label htmlFor="name">Name</label>
      <input type="text" id="Name" name="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" id="Email" name="email" required />
      <label htmlFor="message">Message</label>
      <textarea id="Message" name="message" required />
      <SubmitButton message={state?.message} status={state?.status} />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
      {/* {state?.message && <p className="message">{state?.message}</p>} */}
    </form>
  );
}