'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark that we're on the client
  }, []);

  if (!mounted) return null; // Prevent mismatched render

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 bg-secondary text-background rounded shadow"
    >
      {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
