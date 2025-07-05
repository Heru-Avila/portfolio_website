'use client'; // only needed if using Next.js App Router (app/ folder)

import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mwpbjpqg", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("Message sent!");
      form.reset();
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4">
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="input input-bordered w-full"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="input input-bordered w-full"
      />
      <textarea
        name="message"
        required
        placeholder="Your Message"
        className="textarea textarea-bordered w-full"
        rows={5}
      ></textarea>
      <button type="submit" className="btn btn-primary w-full">
        Send Message
      </button>
      {status && <p className="text-sm text-center">{status}</p>}
    </form>
  );
};

export default ContactForm;
