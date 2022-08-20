import Profile from "../Profile/Profile";
import './Comment.scss';

import profileUrl from '../../assets/images/Mohan-muruge.jpg';

const Comment = () => {
  return (
    <div className="comment">
        <Profile url="" customClass="comment__profile"/>
        <div className="comment__container">
            <div className="comment__info">
                <span className="comment__name">Micheal Lyons</span>
                <span className="comment__date">08/09/2021</span>
            </div>
            <p className="comment__body">
            They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.
            </p>
        </div>
    </div>
)
}

export default Comment