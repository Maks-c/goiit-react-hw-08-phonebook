import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

export default function PublicRout({
                                     children,
                                     navigateTo = '/ContactsList',
                                     restricted = false,
                                   },
){
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={navigateTo} /> : children;
}
