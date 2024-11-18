'use client'
import React, { createContext, useContext, useState } from 'react';
import Modal from '../components/main/components/modal';

type ModalContextType = {
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
};
