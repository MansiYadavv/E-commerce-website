 import React from 'react';
import styles from './footer.module.css';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettä muse.</p>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>USD</p>
          <small>Transactions will be completed in Euro and a currency reference is available on hover.</small>
        </div>
      </div>
     
      <div className={styles.bottomSection}>
     
        <div>
          <h4>mettä muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.followUs}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <FaInstagram />
            <FaLinkedinIn />
          </div>

          <h4>mettä muse ACCEPTS</h4>
          <div className={styles.paymentImage}>
            <img
              src="/icons/paymentcard.png"
              alt="Accepted Payment Methods"
              width="210"
              height="35"
            />
          </div>
        </div>
      </div>


      <p className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
