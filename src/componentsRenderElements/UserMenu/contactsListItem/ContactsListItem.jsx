import React from 'react';
import { SpanItem } from './contacts-list-Item.styled';

import { useDeleteContactMutation } from '../../../Redux/contacts/contacts';
import { Item } from '../contacts/contacts.styled';
import Button from '@mui/material/Button';


const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item key={id}>
      <SpanItem>{name}</SpanItem>
      <SpanItem>{number}</SpanItem>
      <Button sx={{ ml: 2 }} onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
};


export default ContactListItem;
