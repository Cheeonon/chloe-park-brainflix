import './Profile.scss';

const Profile = ({customClass, url, alt}) => {
  if(url==""){
    return(
      <div 
        className={`profile ${customClass}`}> 
      </div> 
    )
  } else{
    return(
    <img     
      className={`profile ${customClass}`}
      src={url}
      alt={alt}>    
    </img>
    )
  }
}

export default Profile


