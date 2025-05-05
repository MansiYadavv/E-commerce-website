// // import React from 'react';
// // import Link from 'next/link';
// // import { FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
// // import styles from './navbar.module.css';

// // const Navbar = () => {
// //   return (
// //     <header>
// //       <div className={styles.topStrip}></div>
// //       <nav className={styles.navbar}>
// //         <div className={styles.navbarLogo}>
// //           <img src="/icons/Logo.svg" alt="Logo" />
// //         </div>
// //         <ul className={styles.navbarLinks}>
// //           <li><Link href="/">Shop</Link></li>
// //           <li><Link href="/">Skills</Link></li>
// //           <li><Link href="/">Stories</Link></li>
// //           <li><Link href="/">About</Link></li>
// //           <li><Link href="/">Contact Us</Link></li>
// //         </ul>
// //         <div className={styles.navbarIcons}>
// //           <FiUser className={styles.navIcon} />
// //           <FiHeart className={styles.navIcon} />
// //           <FiShoppingCart className={styles.navIcon} />
// //           <span className={styles.lang}>ENG</span>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;
// import React from 'react';
// import Link from 'next/link';
// import { FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
// import styles from './navbar.module.css';

// const Navbar = () => {
//   return (
//     <header>
//       <div className={styles.topStrip} aria-hidden="true"></div>
//       <nav className={styles.navbar} role="navigation" aria-label="Main Navigation">
//         <div className={styles.navbarLogo}>
//           <Link href="/">
//             <img src="/icons/Logo.svg" alt="Site Logo" />
//           </Link>
//         </div>

//         <ul className={styles.navbarLinks}>
//           <li><Link href="/">Shop</Link></li>
//           <li><Link href="/">Skills</Link></li>
//           <li><Link href="/">Stories</Link></li>
//           <li><Link href="/">About</Link></li>
//           <li><Link href="/">Contact Us</Link></li>
//         </ul>

//         <div className={styles.navbarIcons}>
//           <button aria-label="User Account" className={styles.iconButton}>
//             <FiUser className={styles.navIcon} />
//           </button>
//           <button aria-label="Wishlist" className={styles.iconButton}>
//             <FiHeart className={styles.navIcon} />
//           </button>
//           <button aria-label="Shopping Cart" className={styles.iconButton}>
//             <FiShoppingCart className={styles.navIcon} />
//           </button>
//           <span className={styles.lang} aria-label="Language">ENG</span>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;














// import Link from 'next/link';
// import { FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
// import styles from './navbar.module.css';

// const Navbar = () => {
//   return (
//     <header>
//       <div className={styles.topStrip}></div>

//       <nav className={styles.navbar}>
//         {/* Left: Hamburger + Logo Image */}
//         <div className={styles.navLeft}>
//           <span className={styles.menuIcon}>☰</span>
//           <Link href="/">
//             <img src="/icons/Logo.svg" alt="Site Logo" className={styles.logoImage} />
//           </Link>
//         </div>

//         {/* Center: Text Logo */}
//         <div className={styles.navCenter}>
//           <span className={styles.logoText}>LOGO</span>
//         </div>

//         {/* Right: Icons + ENG */}
//         <div className={styles.navRight}>
//           <FiUser className={styles.navIcon} />
//           <FiHeart className={styles.navIcon} />
//           <FiShoppingCart className={styles.navIcon} />
//           <button className={styles.langButton}>ENG</button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

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














