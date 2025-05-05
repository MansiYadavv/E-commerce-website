
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


