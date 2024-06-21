import { signIn, getSession } from 'next-auth/client';
import { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle username/password login here
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <button onClick={() => signIn('google')}>Login with Google</button>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


export default LoginPage;
