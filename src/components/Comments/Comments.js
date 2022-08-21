import Comment from "../Comment/Comment"
import CommentForm from "../CommentForm/CommentForm"
import './Comments.scss';

const Comments = () => {
  return (
    <div className="comments">
        <CommentForm />
        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export default Comments