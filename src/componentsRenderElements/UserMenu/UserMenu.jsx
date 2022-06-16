import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import authOperations from '../../redux/auth/auth-operations';
import { MainHead } from './UserMenuStyle';





export default function UserMenu(){
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  console.log(name);
  return (
    <div>
      <MainHead>Your Phonebook</MainHead>
      <span>Welcome, {name}</span>
      <button type='button' onClick={() => dispatch(authOperations.logOut())}>Log out</button>
    </div>
  );
}


