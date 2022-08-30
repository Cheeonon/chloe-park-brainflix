import Comment from "../Comment/Comment"
import CommentForm from "../CommentForm/CommentForm"
import './CommentSection.scss';

// renders a comment form and comments
const Comments = ({comments}) => {
  return (
    <div className="comments">
        <CommentForm />
        {comments.map((comment, index) => ( <Comment key={index} comment={comment} /> ))}
    </div>
  )
}

export default Comments