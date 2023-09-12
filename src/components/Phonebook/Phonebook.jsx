import { useState } from 'react';
import { toast } from 'react-toastify';

import style from './Phonebook.module.css';



export const Phonebook = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const state = {
    name,
    number,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case "name":
        setName(value);
        break;
      case "number":
        if(!/^[0-9\s-+()]*$/.test(value)){
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
    onAddContact(state);
    onFormReset();
  };

  const onFormReset = () => {
    setName("");
    setNumber("");   
  };

  return (
    <>
      <form onSubmit={onFormSubmitAddContact} className={style.phonebook_form}>
        <label className={style.phonebook_label}>
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
        <label className={style.phonebook_label}>
          Number
          <input
            onChange={onInputChange}
            value={number}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter a number"
          />
        </label>
        <button type="submit" className={style.phonebook_submit_btn}>
          Add contact
        </button>
      </form>
    </>
  );
};
