// url
import logoUrl from '../../assets/logo/BrainFlix-logo.svg';
import profileUrl from '../../assets/images/Mohan-muruge.jpg';
import uploadIconUrl from '../../assets/icons/upload.svg';
import searchIconUrl from '../../assets/icons/search.svg';

import './Header.scss'
import Button from '../Button/Button';
import Profile from '../Profile/Profile';
import { NavLink } from 'react-router-dom';


export default function Header(){

    return(
        <header className="nav">
            <NavLink to="/">
                <img className="nav__logo" src={logoUrl} alt="brainflix logo"/>
            </NavLink>
            <div className="nav__search">
                <div className="nav__search-container">
                    <img className="nav__search-icon" src={searchIconUrl} alt="search bar"/>
                    <input className="nav__search-bar" type="text" placeholder='Search'/>
                </div>
                <Profile customClass="nav__profile--mobile" url={profileUrl} alt="Mohan Muruge"/>
            </div>
            <div className="nav__upload">
                <NavLink to="/upload">
                   <Button url={uploadIconUrl} text="Upload" />
                </NavLink>
                <Profile customClass="nav__profile--tablet" url={profileUrl}/>
            </div>
        </header>
    )
}