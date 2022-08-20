import './Button.scss';

const Button = ({customClass, url, text}) => {
  return (
    <div className={`button ${customClass}`}>
        <img className={"button__icon"} src={url} alt={url}/>
        <button className="button__btn">{text}</button>
    </div>
    )
}

export default Button