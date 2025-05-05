
import { useRouter } from 'next/router';
import styles from '../../FrontendStyle/authForm.module.css';
import { useState} from 'react';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      let data = {};
      try {
        data = await res.json();
      } catch (jsonError) {
        console.error('Failed to parse JSON:', jsonError);
      }

      if (res.ok) {
        alert('Login successful');
        router.push('/');
      } else {
        alert(data?.error || 'Login failed');
      }
    } catch (err) {
      alert('Something went wrong. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className={styles.input}
        />

        <button type="submit" className={styles.button}>Login</button>

        <p className={styles.switchLink}>
          Not a member?{' '}
          <span onClick={() => router.push('/register')}>Signup now</span>
        </p>
      </form>
    </div>
  );
}
