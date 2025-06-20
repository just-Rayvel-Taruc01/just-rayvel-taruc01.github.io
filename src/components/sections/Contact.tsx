"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.io/send/rayvelm.taruc02@gmail.com", {
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
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[var(--card-bg)] rounded-lg shadow-md">
      {/* Contact Information */}
      <div className="relative p-6 bg-[var(--contact-card-bg)] flex items-center rounded-t-lg md:rounded-l-lg shadow-md overflow-hidden">
        {/* Blobs */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-300 rounded-full opacity-50 blur-2xl z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full opacity-50 blur-2xl z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-gradient text-4xl font-extrabold mb-3">Get in touch</h2>
          <p className="text-base lg:text-md mb-4">
            I’m always open to discussing new opportunities, creative projects, or collaborations.
            Whether you have a question, want to work together, or just want to say hello—feel free to reach out!
            <br />
            You can contact me through the form below or directly via email.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <FiPhone /> (+63) 928 227 7066
            </li>
            <li className="flex items-center gap-2">
              <FiMail />
              <a href="mailto:rayvelm.taruc02@gmail.com" className="hover:text-[var(--accent)]">
                rayvelm.taruc02@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin /> Purok 2, San Roque, San Luis, Pampanga
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-6 m-3">
        <div className="relative">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mt-6">
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

          {/* Toast Message */}
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
    </div>
  );
}
