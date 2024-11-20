import clsx from 'clsx';
import css from '../Profile/Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={clsx(css.profile)}>
      <div className={clsx(css.profileCard)}>
        <img className={clsx(css.profileCardImg)}
             src={image}
             alt="User avatar"
        />
        <h1>{name}</h1>
        <p className={clsx(css.profileCardDesc)}>@{tag}</p>
        <p className={clsx(css.profileCardDesc)}>{location}</p>
      </div>

      <ul className={clsx(css.profileCardStats)}>
        <li>
          <span>Followers</span>
          <span className={clsx(css.profileCardStatsNumber)}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={clsx(css.profileCardStatsNumber)}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={clsx(css.profileCardStatsNumber)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
