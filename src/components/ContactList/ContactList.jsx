import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filter/filter-selectors';
import { deleteContactsThunk } from '../../redux/contacts/contacts-thunk';
import {getContactsThunk} from '../../redux/contacts/contacts-thunk';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
   
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleContactDelete = (id) => {
    dispatch(deleteContactsThunk(id));
  };

  
  return (
    <ul className={style.list}>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={() => handleContactDelete(id)}
            />
          );
        })
      ) : (
        <li className={style.error}>The list is empty</li>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
