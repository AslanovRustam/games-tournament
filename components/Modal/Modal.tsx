import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-1000 bg-[rgba(33,37,41,0.6)] flex items-start justify-center"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute top-[250px] left-1/2 -translate-x-1/2 w-[600px] min-h-[500px] p-10 flex flex-col items-start gap-10 rounded-lg bg-[rgba(255,255,255,0.25)] backdrop-blur-[25px] shrink-0 shadow-lg">
        {children}
      </div>
    </div>,
    document.body
  );
}
