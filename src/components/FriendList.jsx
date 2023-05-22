import FriendListItem from "./FriendlistItem";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

export default FriendList;