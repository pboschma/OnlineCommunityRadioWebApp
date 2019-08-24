import React from 'react';
import '../style/tabs-nav.sass'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

/**
 * @return {boolean}
 */
function TabsNav(){

    const currentPage = useSelector(state => state.nav.currentPage);
    const dispatch = useDispatch();
    const active = "is-active";

    function dispatchCurrentPage(page){
        dispatch({
            type: 'UPDATE_CURRENT_PAGE',
            payload: page
        })
    }

    return(<div className="tabs is-centered is-boxed">
        <ul>
            <li className={currentPage === "rooster" ? active : null}><Link to="/" onClick={() => dispatchCurrentPage("rooster")}>Rooster</Link></li>
            <li className={currentPage === "geluid" ? active : null}><Link to="/hetgeluid" onClick={() => dispatchCurrentPage("geluid")}>Het geluid</Link></li>
        </ul>
    </div>);
}

export default TabsNav;