import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friendlist.module.css';

const FriendListItem = ({ isOnline, avatar, id, name }) => (
  <li key={id} className={styles.item}>
    <span
      className={isOnline ? styles.statusOnline : styles.statusOffine}
    ></span>
    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
