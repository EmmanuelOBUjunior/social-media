import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'

const Header = () => {
    return (
        <div className = "header">
            <div className = "header__left">
                <img src = " " alt = "Logo"/>
            </div>
            <div className = "header__input">
                 <SearchIcon/>
                <input placeholder = "Search Social Media" type = "text"/>
            </div>
            <div className = "header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize = "large" />
                </div>
            </div>
        </div>
    )
}

export default Header
