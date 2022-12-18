import React from 'react';
import Profile from './components/Profile/profile';
import user from './components/Profile/user.json';
import Statistics from "./components/Statistics/statistics";
import data from "./components/Statistics/data.json";
import FriendList from "./components/Friendlist/friendlist";
import friends from "./components/Friendlist/friends.json";
import TransactionHistory from "./components/Transactions/transanctionsHistory";
import transactions from "./components/Transactions/transactions.json";

const App = () => {
  return (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
        <Statistics title="Upload stats" stats={data}/>
   <Statistics stats={data}/> 
   <FriendList friends={friends} />
   <TransactionHistory items={transactions} />
  </>)
};

export default App;
