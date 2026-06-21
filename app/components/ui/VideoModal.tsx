'use client';

import { ReactNode } from 'react';
import { Modal } from './Modal';
import { YouTubeEmbed } from './YouTubeEmbed';

const defaultCloseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6l-12 12"></path>
    <path d="M6 6l12 12"></path>
  </svg>
);

export function VideoModal({
  open,
  onClose,
  src,
  title,
  embedAllow,
  panelClassName,
  closeButtonClassName = 'absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black flex items-center justify-center transition-all duration-300 border border-white/20',
  closeIcon = defaultCloseIcon,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  title: string;
  embedAllow?: string;
  panelClassName?: string;
  closeButtonClassName?: string;
  closeIcon?: ReactNode;
}) {
  return (
    <Modal open={open} onClose={onClose} panelClassName={panelClassName}>
      <YouTubeEmbed src={src} title={title} allow={embedAllow} className="absolute inset-0" />
      <button onClick={onClose} className={closeButtonClassName} aria-label="Close video">
        {closeIcon}
      </button>
    </Modal>
  );
}
