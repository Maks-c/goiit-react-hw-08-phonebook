import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../Redux/auth';

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

export default function RegisterPage(){
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name){
      case 'name':
        setName(value);
        break;
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
    dispatch(authOperations.register({ name, email, password }));


    setPassword('');
    setEmail('');
    setName('');
  };

  return (
    <div>
      <h1> Сторінка реестрації</h1>
      <form onSubmit={handleSubmit} style={styles.form} >
        <label style={styles.label}>Name
          <input type='text' name='name' value={name} onChange={handleChange} />
        </label>
        <label style={styles.label}>Email
          <input type='text' name='email' value={email} onChange={handleChange} />
        </label>
        <label style={styles.label}>Password
          <input type='text' name='password' value={password} onChange={handleChange} />
        </label>
        <button>Sign up</button>
      </form>
    </div>
  );
}


