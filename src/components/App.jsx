import React from 'react';
import Profile from './Profile';
import user from './json/User.json';
import Statistics from './Statistics';
import data from './json/data.json';
import FriendList from './FriendList';
import friends from  './json/friends.json'; 


const App = () => (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />;
  </div>
);

export default App;
