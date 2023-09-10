import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import style from '../components/App.module.css';

const App = () => {
  
  return (
    <div>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.title}>Contacts</h2>
      <div className={style.contact_list_container}>
        <Filter />
        <ContactList/>
      </div>
    </div>
  );
};

export default App;
