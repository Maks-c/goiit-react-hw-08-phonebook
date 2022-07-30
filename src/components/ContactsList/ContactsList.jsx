import { useGetContactsQuery } from '../../redux/contacts/contacts';
import { useSelector } from 'react-redux';
import React from 'react';
import ContactListItem from './ContactsListItem';
import { List } from './ContactsList.styled';
import { getFilterValue } from '../../redux/contacts/selectors';

const ContactsList = () => {
  // const { data } = useGetContactsQuery();
  // const inputValue = useSelector(state => state.filter.value);
  // const searchName = data?.filter(({ name }) =>
  //   name.toLowerCase().includes(inputValue.toLowerCase())
  // );

  const inputValue = useSelector(getFilterValue);
  const { contacts } = useGetContactsQuery(undefined, {
    selectFromResult: ({ data }) => {
      return {
        contacts: data.filter(contact =>
          contact.name.toLowerCase().includes(inputValue.toLowerCase())
        ),
      };
    },
  });

  return (
    <List>
      {contacts?.map(contacts => {
        return (
          <ContactListItem
            key={contacts.id}
            id={contacts.id}
            name={contacts.name}
            number={contacts.number}
          />
        );
      })}
    </List>
  );
};
//===============start=============
export default ContactsList;
