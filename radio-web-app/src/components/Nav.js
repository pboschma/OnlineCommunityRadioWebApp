import React from 'react';
import config from '../config';

function Nav() {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center"><img src={config.LOGO_URL} /></a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="">Radio</a></li>
                    <li><a href="">Het Geluid</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;