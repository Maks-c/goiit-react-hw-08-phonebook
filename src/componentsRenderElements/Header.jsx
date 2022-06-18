import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

function Header(){
  return (
    <AppBar position='static' >
      <Toolbar>
        <Typography
          variant='h6'
          component='span'
        >
          Phone Book
        </Typography>
        <IconButton
          color='inherit'
          sx={{flexGrow:1}}
        >
          <ShoppingBasket />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
