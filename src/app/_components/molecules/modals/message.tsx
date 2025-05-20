import React, { type RefObject } from "react";
import { BiXCircle } from "react-icons/bi";
import Subtitle from "../../atoms/subtitle";

interface IModalMessageProps {
  onClose?: VoidFunction;
  children: React.ReactNode;
  modalRef: RefObject<HTMLDialogElement>;
}

const ModalMessage = ({ children, modalRef, onClose }: IModalMessageProps) => {
  const handleCloseModal = () => {
    modalRef.current?.close();
    onClose?.();
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
