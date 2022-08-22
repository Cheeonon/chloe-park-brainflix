import Comment from "../Comment/Comment"
import CommentForm from "../CommentForm/CommentForm"
import './Comments.scss';

const Comments = ({comments}) => {
  return (
    <div className="comments">
        <CommentForm />
        {comments.map((comment, index) => ( <Comment key={index} comment={comment} /> ))}
    </div>
  )
}

export default Comments