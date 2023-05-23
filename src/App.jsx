import Profile from './components/profile/Profile';
import user from './data/User.json';
import Statistics from './components/statistics/Statistics';
import data from './data/data.json';
import FriendList from './components/friend-list/FriendList';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
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
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
