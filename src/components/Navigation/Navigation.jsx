import React from 'react';

import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Link } from '@mui/icons-material';
import { HomeLink } from '../Header/Header.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <HomeLink to="/">Home</HomeLink>
      {/*<Link to="/">Home</Link>*/}
      {isLoggedIn && <HomeLink to="/contacts">Contacts</HomeLink>}
    </nav>
  );
};

export default Navigation;
