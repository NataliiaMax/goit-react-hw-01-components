import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendlist.module.css';

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span
            className={friend.isOnline ? styles.statusOnline : styles.statusOffine}
          >
            {friend.isOnline}
          </span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  })
).isRequired};

export default FriendListItem;
