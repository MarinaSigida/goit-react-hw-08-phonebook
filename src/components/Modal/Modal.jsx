import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { ContactDataUpdateForm } from 'components/ContactDataUpdateForm/ContactDataUpdateForm';
import style from './Modal.module.css';


export const Modal = ({ onCloseModal, updateContactId }) => {
  useEffect(() => {
    const onEscClose = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [onCloseModal]);

  const handleModal = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return (
    <>
      <div className={style.overlay} onClick={handleModal}>
        <div className={style.modal}>
          <ContactDataUpdateForm
            onCloseModal={onCloseModal}
            updateContactId={updateContactId}
          />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  updateContactId: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};