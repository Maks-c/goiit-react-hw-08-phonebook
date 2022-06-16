import React from 'react';
//==============================================
import { SpanItem } from './ContactsListItemStyle';

import { useDeleteContactMutation } from '../../../redux/contacts/contacts';
import { Button, Item } from '../Contacts/ContactsStyle';



const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <Item key={id}>
        <SpanItem>{name}</SpanItem>
        <SpanItem>{number}</SpanItem>
        <Button  onClick={() => deleteContact(id)} >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
      </Item>

    </>
  );
};



export default ContactListItem;
