import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from '../../redux/contacts/contacts-thunk';


const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    
    dispatch(deleteContactsThunk(id));
  };

  return (
    <li key={id}  className={style.item}>
      <span className={style.itemName}>{name}:</span>
      <span className={style.itemNumber}>{number}</span>
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={style.delete_btn}
      >
        x
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;