import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import Transactions from "./Transactions/TransactionHistory";
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
=============================================
      <Statistics
        title="Upload stats"
        stats={data} />
=============================================
      <FriendList
        friends={friends} />
=============================================      
      <Transactions
        data={transactions} />
      
    </div>
  );
};
