import Profile from './components/profile/Profile';
import user from './json/User.json';
import Statistics from './components/statistics/Statistics';
import data from './json/data.json';
import FriendList from './components/friend-list/FriendList';
import friends from './json/friends.json';
import transactions from './json/transactions.json';
import TransactionHistory from './components/transactions/Transactions';

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
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
