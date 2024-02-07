import FriendListItem from '../FriendListItem/FriendListItem';
export default FriendList;

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(el => (
        <li key={el.id}>
          <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
