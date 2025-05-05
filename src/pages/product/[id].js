// pages/product/[id].js

import React from 'react';
import Link from 'next/link';
import styles from '../product/productdetail.module.css';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

const ProductDetail = ({ product }) => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>← Back to Products</Link>
      <h1 className={styles.title}>{product.title}</h1>
      <img src={product.image} alt={product.title} className={styles.image} />
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>₹ {product.price}</p>
    </div>
  );
};

export default ProductDetail;
