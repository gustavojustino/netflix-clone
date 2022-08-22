import './Header.scss';
import React from 'react';

const Header = ({scrollhidden}) => {
    return (
        <header className={scrollhidden ? 'scrollhidden' : ''}>
        <div className="header-logo">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" alt="Netflix"/>
            </a>
        </div>
        <div className="header-user">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="usuario"/>
            </a>
        </div>
        </header>
    )
}
export default Header;