"use client";
import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { useForm } from "@formspree/react";

export function ContactForm({ onResetForm }: { onResetForm?: () => void }) {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit] = useForm("xzzgyzoq");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      setShowModal(true);

      const timer = setTimeout(() => {
        setShowModal(false);
        onResetForm?.(); // trigger remount via wrapper
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onResetForm]);

  return (
    <div className="p-6 m-3">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 mt-6 max-w-xl mx-auto"
      >
        {/* Honeypot */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 border border-[var(--secondary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 border border-[var(--secondary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="w-full p-3 border border-[var(--secondary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />

        <button
          type="submit"
          disabled={state.submitting}
          className={`mt-4 px-6 py-2 text-white rounded-lg transition-colors duration-300 ${
            state.submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[var(--accent)] hover:[background:var(--accent-gradient)]"
          }`}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

        {Array.isArray(state.errors) && state.errors.length > 0 && (
          <div
            className="text-red-500 mt-2"
            role="alert"
            aria-live="assertive"
          >
            <p className="font-semibold">❌ Something went wrong:</p>
            <ul className="list-disc ml-5">
              {state.errors.map((error, idx) => (
                <li key={idx}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}
      </form>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="[background:var(--accent-gradient)] rounded-lg p-6 shadow-xl text-center max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-paragraph hover:text-(--paragraph) text-xl font-bold"
              aria-label="Close"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-1 text-(--paragraph)">
              Message Sent
            </h2>
            <p className="text-(--paragraph)">Thanks for reaching out!</p>
          </div>
        </div>
      )}
    </div>
  );
}
