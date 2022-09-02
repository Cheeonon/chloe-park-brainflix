import './UploadPage.scss';
import uploadThumbnail from '../../assets/images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';
import publishIconUrl from '../../assets/icons/publish.svg'
import '../../styles/Button.scss'
import { postVideo } from '../../utils/axiosVideo';
import UploadModal from '../../components/UploadModal/UploadModal';
import { useState } from 'react';


const UploadPage = () => {
  const [isUploaded, setIsUploaded] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();

    postVideo({
      title: event.target.title.value,
      description: event.target.description.value,
    });

    setIsUploaded(true);
  } 

  const handleUploadAgain = () => {
    setIsUploaded(!isUploaded);
  }

  return (
    <>
      {isUploaded && <UploadModal handleUploadAgain={handleUploadAgain}/>}
      <div className="upload"> 
        <h1 className="upload__title">Upload Video</h1>

        <div className="upload__sections">
          <div className="upload__section upload__section--left">
            <span className="upload__subtitle">Video Thumbnail</span>
            <img src={uploadThumbnail} alt="" className="upload__thumbnail" />
          </div>

          <form className="upload__section--right" onSubmit={handleSubmit}>
            <div className="upload__section">
              <label htmlFor="title" className="upload__subtitle">Title Your Video</label>
              <input id="title" name="title" type="text" className="upload__input" placeholder="Add a title to your video"/>
            </div>
            <div className="upload__section">
              <label htmlFor="description" className="upload__subtitle">Add a Video Description</label>
              <textarea id="description" name="description" className="upload__input upload__textarea" placeholder="Add a description to your video"></textarea>
            </div> 
 
            <div className="buttons-container">
              <div className="button upload__button">
                <img className="button__icon" src={publishIconUrl} alt={publishIconUrl}/>
                <button className="button__btn">Publish</button>
              </div>
              <Link to="/" className="button upload__button button--cancle">
                <span className="button__btn button--cancle">Cancle</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UploadPage 