import { useSelector } from 'react-redux';
import { authSelectors } from 'src/redux/auth';
import { MainHead } from './UserMenu.styled';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);

  console.log(name);
  return (
    <div>
      <span>Welcome, {name}</span>
      <MainHead>Your Phonebook</MainHead>
    </div>
  );
}
