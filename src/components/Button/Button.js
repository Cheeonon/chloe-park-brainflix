import './Button.scss';

const Button = ({url, text}) => {
  return (
    <div className="button">
        <img className="button__icon" src={url} alt={url}/>
        <button className="button__btn">{text}</button>
    </div>
    )
}

export default Button