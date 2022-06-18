import { Link } from 'react-router-dom';
;

const AuthNav = () => {
  return (
    <div>
      <Link to='/register'>Registration</Link>
      <Link to='/login'>Login</Link>
    </div>
  );
};


export default AuthNav;
