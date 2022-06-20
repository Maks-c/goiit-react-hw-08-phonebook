import { AppBar,Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelectors } from '../Redux/auth';
import AuthNav from './AuthNav/AuthNav';

// import { ShoppingBasket } from '@mui/icons-material';

function Header(){
  const isLoggedIn=useSelector(authSelectors.getIsLoggedIn)
  const name=useSelector(authSelectors.getUserName)
  return (
    <AppBar position='static' >
      <Toolbar>
        <Typography
          variant='h6'
          component='span'
        >
          {isLoggedIn ? <h3>Hello,{name}</h3> : <h3>Welcome</h3> }
          <AuthNav/>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
