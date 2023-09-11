import { useSelector, useDispatch } from 'react-redux';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import {
  selectContacts,
  selectFilterContacts,
} from 'redux/contacts/contactsSelectors';
import { useState } from 'react';
import { deleteContacts } from 'redux/contacts/contactsOperations';
import { Modal } from 'components/Modal/Modal';
import style from './ContactList.module.css';

export const ContactList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateContactId, setUpdateContactId] = useState(null);

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilterContacts);

  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const onModalOpen = id => {
    setIsModalOpen(true);
    setUpdateContactId(id);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!contacts.length && <p>Your phonebook is empty</p>}
      {filterContacts.length > 0 ? (
        <ul className={style.contact_list}>
          {filterContacts.map(({ id, name, number }) => (
            <li className={style.contact_list_item} key={id} data-id={id}>
                <p className={style.contact_list_values}>
                  {name}: {number}
                </p>


              <div className={style.contact_list_btn_wrapper}>
                <button
                  type="button"
                  name="updateBtn"
                  onClick={() => onModalOpen(id)}
                  className={style.contact_list_btn}
                >
                  <VscEdit />
                </button>
                <button
                  type="button"
                  name="deleteBtn"
                  onClick={() => onDeleteContact(id)}
                  className={style.contact_list_btn}
                >
                  <VscTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        contacts.length > 0 && <p>Nothing found...</p>
      )}
      {isModalOpen && (
        <Modal onCloseModal={onCloseModal} updateContactId={updateContactId} />
      )}
    </>
  );
};