import commentIconUrl from '../../assets/icons/add_comment.svg';
import profileUrl from '../../assets/images/Mohan-muruge.jpg';
import Button from '../Button/Button';
import './CommentForm.scss';
import Profile from '../Profile/Profile';

const CommentForm = () => {
  return (
    <div className="comment-form">
        <span className="comment-form__count">3 Comments</span>
        <div className="comment-form__container">
           <Profile className="" url={profileUrl}/>
            {/* <img className="comment-form__profile" src={profileUrl} alt="" /> */}
            <form className="comment-form__add" >
                <span>Join the conversation</span>
                <input type="text" />
                <Button url={commentIconUrl} text="Comment"/>
            </form>
        </div>
    </div>
  )
}

export default CommentForm