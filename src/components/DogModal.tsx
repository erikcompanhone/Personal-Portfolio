import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface DogModalProps {
  open: boolean;
  onClose: () => void;
}

const DogModal: React.FC<DogModalProps> = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const [candidates] = useState<string[]>([
    '/assets/dog/mel.jpeg',
    '/assets/dog/mel.jpg',
    '/assets/dog/mel.png',
    '/assets/experience/mel.jpeg',
    '/assets/about/mel.png'
  ]);
  const [idx, setIdx] = useState(0);
  const [errored, setErrored] = useState(false);
  const currentSrc = candidates[idx];

  const handleImgError = () => {
    if (idx < candidates.length - 1) {
      setIdx(i => i + 1);
    } else {
      setErrored(true);
    }
  };

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mel-title"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-xl bg-primary shadow-xl ring-1 ring-accent/40 p-6 space-y-4 border border-accent/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="mel-title" className="text-xl font-semibold text-text">Mel</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-muted hover:text-text transition-colors"
          >
            ✕
          </button>
        </div>
        {!errored ? (
          <img
            src={currentSrc}
            alt="Mel the dog"
            loading="lazy"
            decoding="async"
            onError={handleImgError}
            className="w-full rounded-lg object-cover aspect-[4/3] ring-2 ring-accent/50 shadow-sm"
          />
        ) : (
          <div className="w-full aspect-[4/3] rounded-lg bg-secondary flex items-center justify-center text-muted text-sm ring-1 ring-secondary/50">
            Image unavailable
          </div>
        )}
        <p className="text-sm text-muted leading-relaxed">
          Mel is my energetic companion, always nearby while I code. Believe it or not she's 12 years old!
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-accent/80 hover:bg-accent text-white text-sm font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DogModal;
