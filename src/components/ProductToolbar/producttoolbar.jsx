
import React from 'react';
import styles from './producttoolbar.module.css';

const ProductToolbar = ({ showFilter, toggleFilter }) => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <span className={styles.count}>3425 ITEMS</span>
        <span className={styles.filter} onClick={toggleFilter}>
          {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
        </span>
      </div>
      <div className={styles.right}>
        <select className={styles.sortDropdown}>
          <option value="recommended">RECOMMENDED</option>
          <option value="newest">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="priceHigh">PRICE : HIGH TO LOW</option>
          <option value="priceLow">PRICE : LOW TO HIGH</option>
        </select>
      </div>
    </div>
  );
};

export default ProductToolbar;

