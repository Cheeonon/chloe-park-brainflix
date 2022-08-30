import Profile from "../Profile/Profile";
import './Comment.scss';

const Comment = ({ comment }) => {
    // create a comment with received comment data

    const date = new Date(comment.timestamp).toDateString();

  return (
    <div className="comment">
        <Profile url="" customClass="comment__profile"/>
        <div className="comment__container">
            <div className="comment__info">
                <span className="comment__name">{comment.name}</span>
                <span className="comment__date">{date}</span>
            </div>
            <p className="comment__body">{comment.comment}</p>
        </div>
    </div>
)
}

export default Comment