import commentIconUrl from '../../assets/icons/add_comment.svg';
import profileUrl from '../../assets/images/Mohan-muruge.jpg';
import './CommentForm.scss';
import Profile from '../Profile/Profile';
import '../../styles/Button.scss';

const CommentForm = () => {
  
  const handleDefault = (event) => {
    event.preventDefault();
  }

  return ( 
    <div className="comment-form">
        <span className="comment-form__count">3 Comments</span>
        
        <div className="comment-form__container">
            <Profile customClass="comment-form__profile" url={profileUrl} alt="Mohan Muruge"/>
            <form className="comment-form__add" >
                <span className="comment-form__title">Join the conversation</span>
                <div className="comment-form__field">
                  <textarea className="comment-form__input" placeholder='Add a new comment' ></textarea>
                  <div className="button">
                    <img className="button__icon" src={commentIconUrl} alt={commentIconUrl}/>
                    <button className="button__btn" onClick={handleDefault}>Comment</button>
                  </div>
                </div> 
            </form>
        </div>
    </div>
  )
}

export default CommentForm