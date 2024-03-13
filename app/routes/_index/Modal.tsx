import React from "react";

interface ModalProps {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
}

const Modal = ({ isOpen, setOpen, children }: ModalProps) => {

	if (!isOpen) return null;

    const handleClose = () => {
        setOpen(false);
    };

	return (
		<div onClick={handleClose}             
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2
            }}
        >
			<div>
				{ children }
			</div>
		</div>
	);
};

export default Modal;