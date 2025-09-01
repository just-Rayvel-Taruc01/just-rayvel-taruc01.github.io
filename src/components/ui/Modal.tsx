// components/Modal.tsx
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";
import { fetchReadme } from "@/app/utils/githubApi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content?: string;
  image?: string;
  repo?: string; // full repo URL, e.g. "https://github.com/user/repo"
}

export function Modal({ isOpen, onClose, title, content, image, repo }: ModalProps) {
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      lastActiveElement.current = document.activeElement as HTMLElement;
    } else {
      document.body.classList.remove("overflow-hidden");
      lastActiveElement.current?.focus();
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      // focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          "a[href], button, textarea, input, select, [tabindex]:not([tabindex='-1'])"
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) return;

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Load README if repo provided
  useEffect(() => {
    if (isOpen && repo) {
      setReadme(null);
      setError(null);

      try {
        const url = new URL(repo);
        const [owner, repoName] = url.pathname.replace(/^\/|\/$/g, "").split("/");
        if (owner && repoName) {
          setLoading(true);
          fetchReadme(owner, repoName)
            .then(setReadme)
            .catch(() => setError("❌ Failed to load README"))
            .finally(() => setLoading(false));
        }
      } catch {
        setError("❌ Invalid repository URL");
      }
    } else {
      setReadme(null);
      setError(null);
      setLoading(false);
    }
  }, [isOpen, repo]);

  if (!isOpen) return null;

  return (
    <div

      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={`
          bg-white dark:bg-[var(--card-bg)] p-0 rounded-lg shadow-lg 
          w-[95%] sm:w-[90%] md:w-[80%] lg:max-w-3xl 
          h-[90vh] sm:h-[85vh] md:h-[80vh] 
          flex flex-col overflow-hidden 
          transform transition-all duration-300{
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (title + close button) */}
        <div className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h2 id="modal-title" className="text-xl font-bold">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body (now includes image + content) */}
        <div className="flex-1 overflow-y-auto prose dark:prose-invert text-sm">
          {image && (
            <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 768px"
              priority
            />
          </div>
          )}

          <div className="p-6">
            {loading && <p>Loading README...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && readme && (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({ className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    const inline = (props as { inline?: boolean }).inline;
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code
                        className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {readme}
              </ReactMarkdown>
            )}
            {!loading && !error && !readme && content && <p>{content}</p>}
          </div>
        </div>

        {/* Modal Footer */}
        {repo && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
