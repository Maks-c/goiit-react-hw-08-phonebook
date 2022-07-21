import Navigation from './Navigation';
import AuthNav from './authNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';

import { useSelector } from 'react-redux';
import { authSelectors } from 'Redux/auth';


export default function AppBar(){
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav/> }
    </header>
  );
}
