import { useGetContactsQuery } from '../../../Redux/contacts/contacts';
import { useSelector } from 'react-redux';
import React from 'react';
import ContactListItem from '../contactsListItem';
import { List } from './contacts.styled';

const Contacts = () => {
  const { data } = useGetContactsQuery();
  const inputValue = useSelector(state => state.filter.value);
  const searchName = data?.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase()));
  return (

    <List>
      {searchName && searchName.map(contacts => {
        return <ContactListItem key={contacts.id} id={contacts.id} name={contacts.name} number={contacts.number} />;
      })}
    </List>);
};
//===============start=============
export default Contacts;
