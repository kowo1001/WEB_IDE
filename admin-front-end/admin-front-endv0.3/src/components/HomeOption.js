import React from 'react';
import {NavLink} from "react-router-dom";


const HomeOption = (props) => {
    return (
      <ul className = "ul-nolist-inline">
        <li><NavLink activeClassName="nav-selected" to="/admin">{props.li_1}</NavLink></li>
        <li><NavLink to="/admin?p=opencourse">{props.li_2}</NavLink></li>
        <li><NavLink to="/admin?p=opencourse">{props.li_3}</NavLink></li>
        <li><NavLink to="/admin?p=opencourse">{props.li_4}</NavLink></li>
      </ul>
    );
};



export default HomeOption;
