import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../Redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>

      {
        isLoggedIn && (<Link to='/contacts'>Phone Book</Link>)
      }

    </nav>
  );

};


export default Navigation;
