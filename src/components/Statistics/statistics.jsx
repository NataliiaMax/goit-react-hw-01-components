import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

function getRandomColor(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title.length > 0 && <h2 className={styles.title}>Upload stats</h2>}
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;
