
import React, { useState } from 'react';
import Navbar from '../components/Navbar/navbar';
import ProductHeader from '../components/ProductHeader/productheader';
import ProductToolbar from '../components/ProductToolbar/producttoolbar';
import ProductFilterSidebar from '../components/ProductFilterSidebar/productfiltersidebar';
import ProductCard from '../components/ProductCard/productCard';
import styles from '../styles/Home.module.css';
import Footer from '@/components/Footer/footerSection';

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return { props: { products } };
}

export default function Home({ products }) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <Navbar />
      <ProductHeader />
      
      <ProductToolbar 
        showFilter={showFilter} 
        toggleFilter={() => setShowFilter(!showFilter)} 
      />

      <div className={styles.layoutWrapper}>
        {showFilter && <ProductFilterSidebar />}

        <div className={styles.rightContent}>
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

