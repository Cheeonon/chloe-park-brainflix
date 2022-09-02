import { Link } from "react-router-dom";
import "./UploadModal.scss";

const UploadModal = ({handleUploadAgain}) => {
    return (
        <div className="upload-modal">
            <div className="upload-modal__content">
                <span className="upload-modal__text">Video Has Been Uploaded!</span>
                <div className="upload-modal__buttons">
                    <button onClick={handleUploadAgain} className="upload-modal__button upload-modal__button--white">
                        Upload Another Video
                    </button>
                    <Link to="/" className="upload-modal__button upload-modal__button--primary">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UploadModal;
