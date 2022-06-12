import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  operations  from '../../Redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginPage(){
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name){
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({email, password }));
    setPassword('');
    setEmail('');

  };

  return (
    <div>
      <h1> Сторінка реестрації</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete='off'>
        <label style={styles.label}>
          Email
          <input type='text' name='email' value={email} onChange={handleChange} />
        </label>
        <label style={styles.label}>
          Password
          <input type='text' name='password' value={password} onChange={handleChange} />
        </label>
        <button>Log in</button>
      </form>
    </div>
  );
}
