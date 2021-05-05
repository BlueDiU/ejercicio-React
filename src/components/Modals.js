import React from 'react';

import { useModal } from '../hooks/useModal';
import ContactForm from './ContactForm';
import Modal from './modal/Modal';
import ModalPortal from './modal/ModalPortal';

function Modals() {
  const [isOpenModal1, openModal1, closeModal1] = useModal(
    false
  );

  const [isOpenModal2, openModal2, closeModal2] = useModal(
    false
  );

  const [
    isOpenModalPortal,
    openModalPortal,
    closeModalPortal,
  ] = useModal(false);

  const [
    isOpenContact,
    openModalContact,
    closeModalContact,
  ] = useModal(false);

  return (
    <div>
      <h1>Modales</h1>

      <button
        className="btn btn-outline-info mr-5"
        onClick={openModal1}
      >
        Modal 1
      </button>

      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <img
          src="https://placeimg.com/400/400/animals"
          alt="animal"
        />
      </Modal>

      <button
        className="btn btn-outline-info mr-5"
        onClick={openModal2}
      >
        Modal 2
      </button>

      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <img
          src="https://placeimg.com/400/400/nature"
          alt="animal"
        />
      </Modal>

      <button
        className="btn btn-outline-info"
        onClick={openModalContact}
      >
        Contact
      </button>

      <Modal
        isOpen={isOpenContact}
        closeModal={closeModalContact}
      >
        <ContactForm />
      </Modal>

      <button
        className="btn btn-outline-info ml-5"
        onClick={openModalPortal}
      >
        Contact
      </button>

      <ModalPortal
        isOpen={isOpenModalPortal}
        closeModal={closeModalPortal}
      >
        <h3>Portal</h3>
        <p>
          Loading component from other DOM Node declared on
          index.html
        </p>
        <img
          src="https://placeimg.com/400/400/tech"
          alt="tech"
        />
      </ModalPortal>
    </div>
  );
}

export default Modals;
