"use client";

import { motion, AnimatePresence } from "framer-motion";
import { expandCollapse } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";
import type { TechnicalDetails as TechnicalDetailsType } from "@/types";

export function TechnicalDetails({
  details,
  isOpen,
}: {
  details: TechnicalDetailsType;
  isOpen: boolean;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={expandCollapse}
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          className="overflow-hidden"
        >
          <div className="mt-6 border-t border-white/5 pt-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {details.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <p className="mb-4 text-sm leading-relaxed text-text-secondary">
              <span className="font-medium text-text-primary">
                Architecture:{" "}
              </span>
              {details.architecture}
            </p>

            <ul className="space-y-2">
              {details.details.map((detail, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-text-secondary"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
