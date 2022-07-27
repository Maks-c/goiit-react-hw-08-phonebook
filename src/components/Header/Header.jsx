import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthNav from '../AuthNav/AuthNav';
import { HomeLink } from './Header.styled';

function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span">
          {isLoggedIn ? (
            <h3>Hello,{name}</h3>
          ) : (
            <HomeLink to="/">
              <h3>Welcome</h3>
            </HomeLink>
          )}
          <AuthNav />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
