import { Link } from 'react-router-dom';


const Navigation = () => (
  <nav>
    <Link to='/'>Welcome</Link>
    <Link to='/contacts'>Phone Book</Link>
  </nav>
);


export default Navigation;
