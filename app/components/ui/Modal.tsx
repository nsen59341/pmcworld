'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Modal({
  open,
  onClose,
  children,
  backdropClassName = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4',
  panelClassName = 'relative w-[min(56rem,calc(100vw-2rem),calc(85vh*16/9))] aspect-video rounded-2xl overflow-hidden bg-black border border-[#D4AF37]/30 shadow-2xl',
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  backdropClassName?: string;
  panelClassName?: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={backdropClassName}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={panelClassName}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
