import commentIcon from '../../assets/icons/add_comment.svg';
import profile from '../../assets/images/Mohan-muruge.jpg';
import './CommentForm.scss';

const CommentForm = () => {
  return (
    <div className="comment-form">
        <span className="comment-form__count">3 Comments</span>
        <div className="comment-form__container">
            <img className="comment-form__profile" src={profile} alt="" />
            <form className="comment-form__add" >
                <span>Join the conversation</span>
                <input type="text" />
                <button>
                    <img src={commentIcon} alt="" />
                    Comment
                </button>
            </form>
        </div>
    </div>
  )
}

export default CommentForm