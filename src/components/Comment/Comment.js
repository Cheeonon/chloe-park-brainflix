import Profile from "../Profile/Profile";
import './Comment.scss';

const Comment = ({ comment }) => {
    // create a comment with received comment data

    // convert given timstamp to rgith format
    const dateArr = new Date(comment.timestamp).toLocaleDateString().split("/");
    const newDateArr = dateArr.map(date => {
        return date < 10 ? `0${date}` : date
    })
    const newDate = newDateArr.join("/");

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