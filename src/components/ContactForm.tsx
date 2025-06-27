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
      setTimeout(() => setShowModal(false), 9000); // Auto close modal
    }, 100); // Delay to allow form submission to complete
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

        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }}
          onLoad={() => {
            // This fires after the form is submitted
            formRef.current?.reset();
            setShowModal(true);
            launchConfetti();
            setTimeout(() => setShowModal(false), 10000);
          }}
        ></iframe>

        <form
          ref={formRef}
          action="https://formsubmit.co/rayvel.dev@gmail.com"
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

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30"
            onClick={() => setShowModal(false)} // Optional: close on background click
          >
            <div
              className="[background:var(--accent-gradient)] text-[var(--card-tag-text)] rounded-lg p-6 shadow-lg text-center max-w-sm mx-auto relative"
              onClick={(e) => e.stopPropagation()} // Prevent background click from closing
            >
              {/* ✖ Close Button (SVG) */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-white hover:text-gray-200 p-1"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* ✅ Check Icon (SVG) */}
              <div className="flex justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold mb-1">Message Sent</h2>
              <p>Your message has been delivered successfully.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
