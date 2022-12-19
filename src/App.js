import React from 'react';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';
import FriendList from './components/Friendlist/Friendlist';
import friends from './components/Friendlist/friends.json';
import TransactionsHistory from './components/Transactions/TransanctionsHistory';
import transactions from './components/Transactions/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </>
  );
};

export default App;
