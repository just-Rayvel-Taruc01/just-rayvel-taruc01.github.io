import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export function Contact() {
  return (
    <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-[var(--headline)]">Contact</h2>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <FiPhone /> (+63) 928 227 7066
        </li>
        <li className="flex items-center gap-2">
          <FiMail />{" "}
          <a href="mailto:rayvelm.taruc02@gmail.com" className="hover:text-[var(--accent)]">
            rayvelm.taruc02@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FiMapPin /> Purok 2, San Roque, San Luis, Pampanga
        </li>
      </ul>
    </div>
  );
}