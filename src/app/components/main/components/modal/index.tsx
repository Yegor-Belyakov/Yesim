"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styles from "./modal.module.scss";
import { useScrollLock } from "@/app/hooks/useScrollLock";
import CloseIcon from "@/app/icons/closeIcon";
import { useRouter } from  "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const setIsLocked = useScrollLock();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }
  }, [isOpen, setIsLocked]);

  if (!isOpen) return null;

  const checkEmailHandler = () => {
    if (email.includes("@")) {
      localStorage.setItem("email", JSON.stringify(email));
      router.push(`/login`);
      onClose()
    } else {
      setShowEmailError(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.header}>Войдите, чтобы продолжить</div>
        <div
          className={styles.inputAndButtonWrapper}
          onClick={() => inputRef.current?.focus()}
        >
          <div className={styles.input}>
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setShowEmailError(false);
              }}
              placeholder="Введи email"
            />
          </div>
          {showEmailError && (
            <p style={{ color: "red" }}>Почта должна содержать символ "@"</p>
          )}
          <div className={styles.buttonWrapper} onClick={checkEmailHandler}>
            <div className={styles.button}>Продолжить</div>
          </div>
        </div>

        <div onClick={onClose} className={styles.closeModal}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default Modal;
