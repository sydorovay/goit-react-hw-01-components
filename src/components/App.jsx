import React from 'react';
import Profile from './Profile';
import user from './json/User.json'

const App = () => (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </div>
);

export default App;
