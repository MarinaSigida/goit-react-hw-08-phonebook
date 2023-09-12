import { toast } from 'react-toastify';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import { updateContact } from 'redux/contacts/contactsOperations';
import style from './ContactDataUpdateForm.module.css';

export const ContactDataUpdateForm = ({ onCloseModal, updateContactId }) => {
  const contacts = useSelector(selectContacts);
  const dispatsh = useDispatch();
  const userToUpdateArr = contacts.filter(
    contact => contact.id === updateContactId
  );
  const { id, name: userName, number: userNumber } = userToUpdateArr[0];

  const [name, setName] = useState(userName);
  const [number, setNumber] = useState(userNumber);

  const stateData = {
    id,
    name,
    number,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case 'name':
        setName(value);
        break;
      case 'number':
        if (!/^[0-9\s-+()]*$/.test(value)) {
          toast.error('Please enter only numbers, symbols and spaces!');
          break;
        }
        setNumber(value);
        break;
      default:
        return null;
    }
  };

  const onFormSubmitAddContact = e => {
    e.preventDefault();
    dispatsh(updateContact(stateData));
    onCloseModal();
    onFormReset();
  };

  const onFormReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h2>Update contacts</h2>
      <form
        onSubmit={onFormSubmitAddContact}
        className={style.contacts_update_form}
      >
        <label className={style.contacts_update_label}>
          Name
          <input
            onChange={onInputChange}
            type="text"
            name="name"
            value={name}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter a name"
          />
        </label>
        <label className={style.contacts_update_label}>
          Number
          <input
            onChange={onInputChange}
            value={number}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
          />
        </label>
        <button className={style.contacts_update_button}>Update</button>
      </form>
    </>
  );
};

ContactDataUpdateForm.propTypes = {
  updateContactId: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
