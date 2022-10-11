import { FriendsListItem } from "./FriendListItem"
import css from './FriendsList.module.css'
import PropTypes from 'prop-types'

export const FriendsList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map((friend) => {
                return <FriendsListItem props={friend} key={friend.id} />
            })}
        </ul>
    )
 }

 FriendsList.propTypes = {
   friends: PropTypes.arrayOf(
     PropTypes.shape({
       avatar: PropTypes.string.isRequired,
       name: PropTypes.string.isRequired,
       isOnline: PropTypes.bool.isRequired,
       id: PropTypes.number.isRequired,
     })
   ),
 };