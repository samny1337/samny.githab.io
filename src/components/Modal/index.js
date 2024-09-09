import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Dialog, DialogTitle } from '@headlessui/react';

const Modal = ({ visible, children }) => {
  const [isOpen, setIsOpen] = useState(visible);

  return (
    <div className={styles.content}>
      <button onClick={() => setIsOpen(true)}>Открыть модальное окно</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.bg}>
          <Dialog.Panel className={styles.popup}>
            <div>{children}Текст окна</div>
            <button className={styles.modalClose} onClick={() => setIsOpen(false)}>
              X
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Modal;
