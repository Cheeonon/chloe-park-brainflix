import './Header.scss'
import logoUrl from '../../assets/logo/BrainFlix-logo.svg';
import profileUrl from '../../assets/images/Mohan-muruge.jpg';
import searchUrl from '../../assets/icons/search.svg';
import uploadUrl from '../../assets/icons/upload.svg';



export default function Header(){

    return(
        <header className="nav">
            <img className="nav__logo" src={logoUrl} alt="brainflix logo"/>
            <div className="nav__search">
                <div className="nav__search-container">
                    <img className="nav__search-icon" src={searchUrl} alt="search bar"/>
                    <input className="nav__search-bar" type="text" placeholder='Search'/>
                </div>
                <img className="nav__profile" src={profileUrl}></img>
            </div>
            <div className="nav__upload">
                <div className="nav__upload-container">
                    <img className="nav__upload-icon" src={uploadUrl} alt="upload button"/>
                    <button className="nav__upload-button">Upload</button>
                </div>
                <img className="nav__profile nav__profile--hidden" src={profileUrl}></img>
            </div>
        </header>
    )
}