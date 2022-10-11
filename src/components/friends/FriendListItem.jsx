import css from './FriendsList.module.css'

export const FriendsListItem = ({ props }) => {
    return (
      <li className={css.item}>
            <span className={props.isOnline ? css.isOnline : css.isOffline}>{props.isOnline}</span>
        <img className={css.avatar} src={props.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{props.name}</p>
      </li>
    );
}