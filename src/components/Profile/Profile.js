import './Profile.scss';

const Profile = ({customClass, url, alt}) => {
  // return div tag instead of img tag when the a user doesn't have profile url
  if(url===""){
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


