"use client";

import React, { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/wipidawi%40mailgolem.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="p-6 m-3">
      <div className="relative">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mt-6">
          {/* Hidden FormSubmit config */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_subject" value="New Contact Message" />
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

          {/* Honeypot (anti-spam) */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Visible fields */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 border border-[var(--secondary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border border-[var(--secondary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 mt-4 border border-[var(--secondary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            rows={4}
            required
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-[var(--accent)] text-white rounded-lg 
                       hover:[background:var(--accent-gradient)] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Toast message */}
        {submitted && (
          <div
            role="status"
            aria-live="polite"
            className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md transition-all duration-300"
          >
            ✅ Message sent successfully!
          </div>
        )}
      </div>
    </div>
  );
}
