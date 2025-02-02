import React, { useEffect, useRef } from "react";
import { BiXCircle } from "react-icons/bi";
import Subtitle from "../../atoms/subtitle";

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
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (isModalOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    modalRef.current?.close();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className="closed:translate-y-full fixed inset-auto bottom-1/4 left-1/2 w-2/3 -translate-x-1/2 rounded-xl border-2 border-secondary bg-primary bg-opacity-10 bg-clip-padding p-3 backdrop-blur-md backdrop-filter transition-transform backdrop:bg-inherit open:translate-y-0 md:w-1/2"
    >
      <div className="flex justify-between pb-4">
        <Subtitle text="be reachable..." />
        <BiXCircle
          onClick={handleCloseModal}
          className="h-6 w-6 text-primary"
        />
      </div>
      {children}
    </dialog>
  );
};

export default ModalMessage;
