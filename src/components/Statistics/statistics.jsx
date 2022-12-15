import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({title, stats}) => {
    return (
<section className={styles.statistics}>
    {title.length > 0 && (
         <h2 className={styles.title}>Upload stats</h2> 
    )
    }

  <ul className={styles.stat-list}>
    <li className={styles.item} key={stats.id}>
      <span className={styles.label}>{stats.label}</span>
      <span className={styles.percentage}>{stats.percentage}</span>
    </li>
    <li className={styles.item} key={stats.id}>
      <span className={styles.label}>{stats.label}</span>
      <span className={styles.percentage}>{stats.percentage}</span>
    </li>
    <li className={styles.item} key={stats.id}>
      <span className={styles.label}>{stats.label}</span>
      <span className={styles.percentage}>{stats.percentage}</span>
    </li>
    <li className={styles.item} key={stats.id}>
      <span className={styles.label}>{stats.label}</span>
      <span className={styles.percentage}>{stats.percentage}</span>
    </li>
  </ul>
</section>
    )
}


Statistics.propTypes = {title: PropTypes.string.isRequired,
        stats: PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  };
  
  export default Statistics;