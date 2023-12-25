import styles from './profile.module.css';

export const Profile = props => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={username} className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.items}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>
            <b>{followers}</b>
          </span>
        </li>
        <li className={styles.items}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>
            <b>{views}</b>
          </span>
        </li>
        <li className={styles.items}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
