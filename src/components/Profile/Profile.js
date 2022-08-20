import './Profile.scss';

const Profile = ({customClass, url, alt}) => {
  return (
    <img     
        className={`profile ${customClass}`}
        src={url}
        alt={alt}>    
    </img>
  )
}

export default Profile