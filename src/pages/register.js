import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../FrontendStyle/authForm.module.css';

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      // Check if response is okay before trying to parse JSON
      if (!res.ok) {
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Registration failed');
        } else {
          // Handle non-JSON responses (like HTML error pages)
          const errorText = await res.text();
          throw new Error(`Server error (${res.status})`);
        }
      }

      const data = await res.json();
      alert('Registration successful');
      router.push('/login');
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
      alert(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Register</h2>
        {error && <div className={styles.errorMessage}>{error}</div>}
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
          minLength="6"
        />
        <button 
          type="submit" 
          className={styles.button}
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
        <p className={styles.switchLink}>
          Already have an account?{' '}
          <span onClick={() => router.push('/login')}>Login</span>
        </p>
      </form>
    </div>
  );
}