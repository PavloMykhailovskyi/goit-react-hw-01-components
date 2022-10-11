import { FriendsListItem } from "./FriendListItem"
import css from './FriendsList.module.css'

export const FriendsList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map((friend) => {
                return <FriendsListItem props={friend} key={friend.id} />
            })}
        </ul>
    )
 }
