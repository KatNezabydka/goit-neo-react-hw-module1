import clsx from 'clsx';
import css from '../FriendListItem/FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? css.greenColor : css.redColor)}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default FriendListItem;
