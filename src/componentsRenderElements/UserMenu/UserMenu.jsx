import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import authOperations from '../../redux/auth/auth-operations';

export default function UserMenu(){
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  console.log(name);
  return (
    <div>
      <h1>USER MENU</h1>
      <span>Ласкаво просимо, {name}</span>
      <button type='button' onClick={() => dispatch(authOperations.logOut())}>Log out</button>
    </div>
  );
}
