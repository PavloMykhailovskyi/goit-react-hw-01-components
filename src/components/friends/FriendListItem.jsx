import css from './FriendsList.module.css'
import PropTypes from 'prop-types'

export const FriendsListItem = ({ props }) => {
    return (
      <li className={css.item}>
            <span className={props.isOnline ? css.isOnline : css.isOffline}>{props.isOnline}</span>
        <img className={css.avatar} src={props.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{props.name}</p>
      </li>
    );
}

FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};