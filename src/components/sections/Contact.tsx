import { FiMail, FiMapPin } from "react-icons/fi";
import { ContactFormWrapper } from "../ContactFormWrapper";

export function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[var(--card-bg)] rounded-lg shadow-md">
      {/* Contact Information */}
      <div className="relative p-6 bg-[var(--contact-card-bg)] flex items-center md:rounded-t-none rounded-t-lg md:rounded-l-lg shadow-md overflow-hidden">
        {/* Blobs */}
        <div className="absolute top-20 -left-10 w-40 h-40 bg-blue-900 rounded-full opacity-50 blur-2xl z-0"></div>
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
            <li className="flex items-center gap-2 hover:text-[var(--accent)]">
              <FiMail />
              <a href="mailto:rayvel.dev@gmail.com">rayvel.dev@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin /> San Luis, Pampanga
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form with theme handling */}
      <ContactFormWrapper />
    </div>
  );
}
