import { useRouter } from 'next/router';
import styles from '../../FrontendStyle/authForm.module.css';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(response => {
        if (!response.ok) {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            return response.json().then(err => Promise.reject(err));
          } else {
            return response.text().then(text =>
              Promise.reject(new Error(`Server error ${response.status}: ${text.substring(0, 100)}...`))
            );
          }
        }
        return response.json();
      })
      .then(data => {
        console.log('Login successful:', data);
        router.push('/');
      })
      .catch(error => {
        console.error('Login error:', error.message || error);
        // You can add a UI element to show error if needed
      });
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
