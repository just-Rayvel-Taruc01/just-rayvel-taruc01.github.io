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

        {/* Name Input */}
        <div className="relative w-full">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            required
            className="peer w-full p-3 pt-5 rounded-lg border border-gray-300
                      focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          <label
            htmlFor="name"
            className="absolute left-3 top-1 text-gray-400 text-sm transition-all duration-200
                      peer-placeholder-shown:text-gray-400 
                      peer-placeholder-shown:text-base
                      peer-focus:top-1 
                      peer-focus:text-sm 
                      peer-placeholder-shown:top-4.5
                      peer-focus:text-[var(--accent)]" >
            Your Name
          </label>
        </div>

        {/* Email Input */}
        <div className="relative w-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            required
            className="peer w-full p-3 pt-5 rounded-lg border border-gray-300
                      focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-1 text-gray-400 text-sm transition-all duration-200
                      peer-placeholder-shown:text-gray-400 
                      peer-placeholder-shown:text-base
                      peer-focus:top-1 
                      peer-focus:text-sm 
                      peer-placeholder-shown:top-4.5
                      peer-focus:text-[var(--accent)]"
          >
            Your Email
          </label>
        </div>

        {/* Message Textarea */}
        <div className="relative w-full">
          <textarea
            name="message"
            id="message"
            placeholder=" "
            required
            rows={4}
            className="peer w-full p-3 pt-5 rounded-lg border border-gray-300
                      focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          <label
            htmlFor="message"
            className="absolute left-3 top-1 text-gray-400 text-sm transition-all duration-200
                      peer-placeholder-shown:text-gray-400 
                      peer-placeholder-shown:text-base
                      peer-focus:top-1 
                      peer-focus:text-sm 
                      peer-placeholder-shown:top-4
                      peer-focus:text-[var(--accent)]"
          >
            Your Message
          </label>
        </div>

        {/* Submit Button */}
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
            {/* Modal Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-paragraph hover:text-gray-400 text-xl font-bold"
              aria-label="Close"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-1 text-paragraph">
              Message Sent
            </h2>
            <p className="text-paragraph">Thanks for reaching out!</p>
          </div>
        </div>
      )}
    </div>
  );
}
