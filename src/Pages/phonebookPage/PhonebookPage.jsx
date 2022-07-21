import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Form from '../../componentsRenderElements/UserMenu/form';
import Contacts from '../../componentsRenderElements/UserMenu/contacts';
import Filter from '../../componentsRenderElements/UserMenu/filter';
import { Wrapper } from '../../componentsRenderElements/UserMenu/userMenu.styled';





export default function PhonebookPage(){

  return (
    <Wrapper>
      <Form />
      <Contacts />
      <Filter />
      <ToastContainer theme='colored' autoClose={500} />
    </Wrapper>
  );
}
