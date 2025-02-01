import React, { useEffect, useRef } from "react";
import { BiXCircle } from "react-icons/bi";

interface IModalMessageProps {
  isModalOpen: boolean;
  children: React.ReactNode;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMessage = ({
  children,
  isModalOpen,
  setIsModalOpen,
}: IModalMessageProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    // Grabbing a reference to the modal in question
    const modalElement = modalRef.current;
    if (!modalElement) return;

    // Open modal when `isOpen` changes to true
    if (isModalOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen((prev) => !prev);
    modalRef.current?.close();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown}>
      <BiXCircle onClick={handleCloseModal} />
      {children}
    </dialog>
  );
};

export default ModalMessage;
