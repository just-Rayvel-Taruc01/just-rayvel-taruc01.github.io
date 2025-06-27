"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { ContactForm } from "./ContactForm";

export function ContactFormWrapper() {
  const { theme } = useTheme();
  const [formKey, setFormKey] = useState(0);

  const handleResetForm = () => {
    setFormKey(prev => prev + 1); // remounts ContactForm
  };

  return (
    <ContactForm key={`${theme}-${formKey}`} onResetForm={handleResetForm} />
  );
}
