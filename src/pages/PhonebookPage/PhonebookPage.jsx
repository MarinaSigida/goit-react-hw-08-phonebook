import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { updateFilter } from 'redux/filter/filterSlice';
import { addContacts } from 'redux/contacts/contactsOperations';

import { Phonebook } from '../../components/Phonebook/Phonebook';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from '../../components/Loader/Loader';
import style from './PhonebookPage.module.css';



const PhonebookPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const onAddContact = newUser => {
    const uniqUserSearch = contacts.find(({ name }) => name === newUser.name);
    uniqUserSearch
      ? toast.info(`${uniqUserSearch.name} is already in Phonebook`)
      : dispatch(addContacts(newUser));
  };

  const onChangeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <div className={style.phonebook_main}>
        <Helmet>
      <title>Phonebook</title>
      </Helmet>
        <Phonebook onAddContact={onAddContact} />
        <Helmet>
      <title>Contacts</title>
      </Helmet>
        <Filter onChangeFilter={onChangeFilter} />
        <ContactList />
      {isLoading && <Loader />}
    </div>
  );
};

export default PhonebookPage;