"use client";

import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";

export function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    setTimeout(() => {
    formRef.current?.reset();
    setShowModal(true);
    launchConfetti();
    setTimeout(() => setShowModal(false), 4000); // Auto close modal
    }, 100); // Delay to ensure form submission is processed
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="p-6 m-3">
      <div className="relative">
        {/* Hidden iframe for background form submission */}
        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }}
        ></iframe>

        <form
          ref={formRef}
          action="41b0e6fe1694b15bd5f45539a6e348d9"
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 mt-6"
        >
          {/* Hidden FormSubmit config */}
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Contact Message" />

          {/* Honeypot */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Visible fields */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 border border-[var(--card-tag-bg)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border border-[var(--card-tag-bg)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border border-[var(--card-tag-bg)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            rows={4}
            required
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-[var(--accent)] text-white font-semibold rounded-lg 
                       hover:bg-gradient-to-r hover:from-[var(--gradient-hover-from)] hover:to-[var(--gradient-hover-to)]
                       transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50">
            <div className="bg-[var(--card-tag-bg)] text-[var(--card-tag-text)] rounded-lg p-6 shadow-lg text-center max-w-sm mx-auto">
              <h2 className="text-2xl font-semibold mb-2">✅ Sent!</h2>
              <p>Your message has been delivered.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
