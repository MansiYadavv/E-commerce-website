

import Link from 'next/link';
import { FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <div className={styles.topStrip}></div>

      <nav className={styles.navbar}>
        {/* Left: Hamburger + Logo Image */}
        <div className={styles.navLeft}>
          <span className={styles.menuIcon}>☰</span>
          <Link href="/">
            <img src="/icons/Logo.svg" alt="Site Logo" className={styles.logoImage} />
          </Link>
        </div>

        {/* Center: Text Logo */}
        <div className={styles.navCenter}>
          <span className={styles.logoText}>LOGO</span>
        </div>

        {/* Right: Icons + ENG */}
        <div className={styles.navRight}>
          <Link href="/register">
            <FiUser className={styles.navIcon} />
          </Link>
          <FiHeart className={styles.navIcon} />
          <FiShoppingCart className={styles.navIcon} />
          <button className={styles.langButton}>ENG</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;














