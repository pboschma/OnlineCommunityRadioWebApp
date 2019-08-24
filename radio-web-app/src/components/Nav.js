import React from 'react';
import config from '../config';
import '../style/nav.sass'


/**
 * @return {boolean}
 */
function Nav() {

    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }

    });

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="/" style={{position: 'absolute', left: '50%', marginLeft: '-100px', marginTop: '0px', height: '100%', display: 'block', alignItems: 'center'}}>
                    <div className="logo" style={{backgroundImage: 'url(' + config.LOGO_URL + ')'}}></div>
                </a>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                </div>
        </nav>

    );
}

export default Nav;