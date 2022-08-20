import './Profile.scss';

const Profile = ({className, url}) => {
  return (
    <img     
        className={`profile ${className}`}
        src={url}>    
    </img>
  )
}

export default Profile