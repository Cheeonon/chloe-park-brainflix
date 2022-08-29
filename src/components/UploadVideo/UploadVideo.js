import './UploadVideo.scss';
import uploadThumbnail from '../../assets/images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import publishIconUrl from '../../assets/icons/publish.svg'

const UploadVideo = () => {
  return (
    <>
      <div className="upload"> 
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__section">
          <span className="upload__subtitle">Video Thumbnail</span>
          <img src={uploadThumbnail} alt="" className="upload__thumbnail" />
        </div>
        <div className="upload__section">
          <label htmlFor="title" className="upload__subtitle">Title Your Video</label>
          <input id="title" type="text" className="upload__input" placeholder="Add a title to your video"/>
        </div>
        <div className="upload__section">
          <label htmlFor="description" className="upload__subtitle">Add a Video Description</label>
          <textarea id="description" className="upload__input upload__textarea" placeholder="Add a description to your video"></textarea>
        </div> 
        <div className="upload__button-container">
          <Link to="" className="upload__button">
            <Button url={publishIconUrl} text="Publish"/>
          </Link>
          <Link to="" className="upload__button">
            <Button url="" text="Cancle" background="background__white" color="color__Primary-Color"/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default UploadVideo