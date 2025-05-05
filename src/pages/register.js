import { useState } from 'react';
import { useRouter } from 'next/router';


import styles from '../../FrontendStyle/authForm.module.css';

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Registration successful');
      router.push('/login'); // ✅ Redirect after registration
    } else {
      alert(data.error || 'Registration failed');
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className={styles.input}
        />
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
        <button type="submit" className={styles.button}>Register</button>
        <p className={styles.switchLink}>
        Already have an account?{' '}
        <span onClick={() => router.push('/login')}>Login</span>
      </p>
      </form>

     
    </div>
  );
}