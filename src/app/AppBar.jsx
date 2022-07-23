import Navigation from '../components/Navigation/Navigation';
import AuthNav from '../components/AuthNav/AuthNav';
import UserMenu from '../components/UserMenu/UserMenu';

import { useSelector } from 'react-redux';
import { authSelectors } from 'src/redux/auth';


export default function AppBar(){
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav/> }
    </header>
  );
}
