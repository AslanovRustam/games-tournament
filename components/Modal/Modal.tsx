import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalWrapper } from "./Modal.styled";

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
      className="fixed inset-0 z-1000 backdrop-blur-[25px]  flex items-center justify-center p-4 sm:px-6 md:px-8"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <ModalWrapper>{children}</ModalWrapper>
    </div>,
    document.body
  );
}
