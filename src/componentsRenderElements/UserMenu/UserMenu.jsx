import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'Redux/auth';
import authOperations from '../../Redux/auth/auth-operations';
import { MainHead } from './UserMenuStyle';





export default function UserMenu(){
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  console.log(name);
  return (
    <div>
      <span>Welcome, {name}</span>
      <button type='button' onClick={() => dispatch(authOperations.logOut())}>Log out</button>
      <MainHead>Your Phonebook</MainHead>
    </div>
  );
}


