import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Form from '../../componentsRenderElements/UserMenu/Form';
import Contacts from '../../componentsRenderElements/UserMenu/Contacts';
import Filter from '../../componentsRenderElements/UserMenu/Filter';
import { Wrapper } from '../../componentsRenderElements/UserMenu/UserMenuStyle';





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
