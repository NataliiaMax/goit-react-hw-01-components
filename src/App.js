import React from 'react';
import Profile from './components/Profile/profile';
// import user from './components/Profile/user.json';
import user from "path/to/user.json";
import Statistics from "./components/Statistics/statistics";
import data from "./components/Statistics/data.json";

const App = () => {
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
  </>;
};

export default App;
