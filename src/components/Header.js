import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {IconButton} from '@material-ui/core';
import "./Header.css"

const Header = () => {
    return (
        <div className = "header">
            <div className = "header__left">
                <img src = " " alt = "Logo"/>
            </div>
            <div className = "header__input header__input-center">
                 <SearchIcon/>
                <input placeholder = "Search Social Media" type = "text"/>
            </div>
            <div className = "header__right">
            <div className="header__option header__option--active">
                    
                    <HomeIcon fontSize = "large" />
                   
                </div>
                <div className="header__option">
                    
                    <ChatIcon fontSize = "large"/>
                </div>
                <div className="header__option">
                    
                    <NotificationsIcon fontSize = "large"/>
                </div>
                <div className="header__option">
                    
                    <AccountCircleIcon fontSize = "large" color = "primary"/>
                    <h4>Emmanuel Obu Junior</h4>
                </div>
            </div>
        </div>
    )
}

export default Header
