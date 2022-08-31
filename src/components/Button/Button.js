import './Button.scss';

// customizable button
const Button = ({url, text, background, color, type}) => {
  
// return div tag instead of img tag when the a user doesn't have image url
  if(url===""){
    return(
      <div className={`button ${background}`}>
        <button className={`button__btn ${color}`}>{text}</button>
    </div> 
    )  
  } else{
    return (
      <div className={"button"}>
          <img className={"button__icon"} src={url} alt={url}/>
          <button className="button__btn" type={type}>{text}</button>
      </div>
    )
  } 
}

export default Button