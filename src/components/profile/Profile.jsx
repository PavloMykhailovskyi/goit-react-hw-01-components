import css from './Profile.module.css'
import { ProfileData } from './ProfileData';
import PropTypes from 'prop-types'

export const Profile = (user) => {
  // const {username, tag, location, avatar, stats} = user
    return (
      <div className={css.profile}>
        <div className={css.description}>
          <img
            src={user.avatar}
            alt={user.username}
            className={css.avatar}
          />
                <p className={css.name}>{user.username}</p>
                <p className={css.tag}>{user.tag}</p>
                <p className={css.location}>{user.location}</p>
        </div>
        <ProfileData stats={user.stats} />
      </div>
    );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};