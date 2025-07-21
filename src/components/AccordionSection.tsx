import React, { useState } from "react";
import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionSectionProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * Accessible, reusable accordion section for toggling visibility of content.
 * @param title Section header (can include icons)
 * @param children Section content
 * @param defaultOpen Whether the section is open by default
 * @param className Optional extra classes for the outer container
 */
const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  children,
  defaultOpen = false,
  className = "",
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section
      className={`mb-2 rounded-lg shadow-md border border-gray-200 bg-white overflow-hidden transition-all duration-200 ${className}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-white hover:bg-blue-50 transition-colors group"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="flex items-center gap-3 text-lg font-semibold text-blue-700 group-hover:text-blue-900">
          {title}
        </span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`transition-transform duration-300 text-blue-400 group-hover:text-blue-700 ${open ? 'rotate-90' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden px-6 pb-4"
            aria-hidden={!open}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AccordionSection;
