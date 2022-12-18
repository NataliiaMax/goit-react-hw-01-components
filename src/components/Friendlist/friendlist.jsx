import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendlist.module.css';
import FriendListItem from './friendListItem'


const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList} key={friends.id}>
    <FriendListItem friends={friends}/>
  </ul>
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  })
).isRequired};

export default FriendList;