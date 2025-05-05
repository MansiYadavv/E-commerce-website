// import React from 'react';
// import styles from './filter.module.css';

// const FilterSidebar = () => {
//   return (
//     <aside className={styles.sidebar}>
//       <h3 className={styles.title}>CUSTOMIZE</h3>

//       <div className={styles.group}>
//         <h4 className={styles.groupTitle}>IDEAL FOR</h4>
//         <label><input type="checkbox" /> Men</label>
//         <label><input type="checkbox" /> Women</label>
//         <label><input type="checkbox" /> Baby & Kids</label>
//       </div>

//       <div className={styles.group}>
//         <h4 className={styles.groupTitle}>OCCASION</h4>
//         <label><input type="checkbox" /> All</label>
//       </div>

//       <div className={styles.group}>
//         <h4 className={styles.groupTitle}>WORK</h4>
//         <label><input type="checkbox" /> All</label>
//       </div>

//       <div className={styles.group}>
//         <h4 className={styles.groupTitle}>FABRIC</h4>
//         <label><input type="checkbox" /> All</label>
//       </div>

//       <div className={styles.group}>
//         <h4 className={styles.groupTitle}>SEGMENT</h4>
//         <label><input type="checkbox" /> All</label>
//       </div>

//       <div className={styles.group}>
//         <h4 className={styles.groupTitle}>SUITABLE FOR</h4>
//         <label><input type="checkbox" /> All</label>
//       </div>

//       <div className={styles.group}>
//         <h4 className={styles.groupTitle}>RAW MATERIALS</h4>
//         <label><input type="checkbox" /> All</label>
//       </div>

//       <div className={styles.group}>
//         <h4 className={styles.groupTitle}>PATTERN</h4>
//         <label><input type="checkbox" /> All</label>
//       </div>
//     </aside>
//   );
// };

// export default FilterSidebar;
import React from 'react';
import styles from './filter.module.css';

const filterOptions = {
  'IDEAL FOR': ['Men', 'Women', 'Baby & Kids'],
  'OCCASION': ['All'],
  'WORK': ['All'],
  'FABRIC': ['Cotton', 'Silk', 'Linen'],
  'SEGMENT': ['All'],
  'SUITABLE FOR': ['All'],
  'RAW MATERIALS': ['Organic', 'Synthetic'],
  'PATTERN': ['Solid', 'Printed', 'Embroidered'],
};

const FilterSidebar = () => {
  // Make a simple list from object
  const sections = Object.entries(filterOptions);

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>CUSTOMIZE</h3>

      {/* Loop through each filter section */}
      {sections.map((section, index) => {
        const title = section[0];
        const options = section[1];

        return (
          <div className={styles.group} key={index}>
            <h4 className={styles.groupTitle}>{title}</h4>

            {/* Loop through each option in that section */}
            {options.map((option, i) => (
              <label key={i} className={styles.option}>
                <input type="checkbox" /> {option}
              </label>
            ))}
          </div>
        );
      })}
    </aside>
  );
};

export default FilterSidebar;


