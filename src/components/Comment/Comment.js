import Profile from "../Profile/Profile";
import './Comment.scss';
import dateFormat from '../../utils/dateFormat.js';

const Comment = ({ comment }) => {
    // create a comment with received comment data
    const newDate = dateFormat(comment.timestamp);
    

  return (
    <div className="comment">
        <Profile url="" customClass="comment__profile"/>
        <div className="comment__container">
            <div className="comment__info">
                <span className="comment__name">{comment.name}</span>
                <span className="comment__date">{newDate}</span>
            </div>
            <p className="comment__body">{comment.comment}</p>
        </div>
    </div>
)
}

export default Comment 