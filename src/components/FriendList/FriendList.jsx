import { FriendListItem } from './FriendListItem';
import styles from './friends-list.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};
