

import React, { useState } from 'react';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';
import styles from './productCard.module.css';

const ProductCard = ({ product, onWishlistToggle }) => {
  const [liked, setLiked] = useState(false);

  const handleHeartClick = (e) => {
    e.stopPropagation(); // Stop from triggering outer clicks
    e.preventDefault();
    setLiked(!liked);
    if (typeof onWishlistToggle === 'function') {
      onWishlistToggle(product, !liked);
    }
  };

  return (
    <div className={styles.card}>
    
      <Link href={`/product/${product.id}`}>
        <div>
          <img src={product.image} alt={product.title} className={styles.image} />
          <h3 className={styles.title}>{product.title}</h3>
        </div>
      </Link>

      <div className={styles.priceRow}>
        <p className={styles.price}>₹ {product.price}</p> 
        <FiHeart
          className={`${styles.heartIcon} ${liked ? styles.active : ''}`}
          onClick={handleHeartClick}
        />
      </div>

      <p className={styles.note}>Sign in or Create an account to see pricing</p>
    </div>
  );
};

export default ProductCard;















// import React, { useState } from 'react';
// import { FiHeart } from 'react-icons/fi';
// import styles from './productCard.module.css';

// const ProductCard = ({ product, onWishlistToggle }) => {
//   const [liked, setLiked] = useState(false);

//   const handleHeartClick = () => {
//     setLiked(!liked);
//     onWishlistToggle(product, !liked); // Pass item to parent
//   };

//   return (
//     <div className={styles.card}>
//       <img src={product.image} alt={product.title} className={styles.image} />
//       <h3 className={styles.title}>{product.title}</h3>
//       <p className={styles.price}>₹ {product.price}</p>
//       <p className={styles.note}>Sign in or Create an account to see pricing</p>
      
//       <div className={styles.heartWrapper}>
//         <FiHeart
//           className={`${styles.heartIcon} ${liked ? styles.active : ''}`}
//           onClick={handleHeartClick}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




