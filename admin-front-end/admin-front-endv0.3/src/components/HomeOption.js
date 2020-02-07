import React from 'react';
import {NavLink} from "react-router-dom";
import { Nav } from 'react-bootstrap';


const HomeOption = (props) => {
    return (
      <Nav>
        <ul className = "ul-nolist-inline">
          <li><NavLink activeClassName="nav-selected" to="/admin">{props.li_1}</NavLink></li>
          <li><NavLink to="/admin/home?p=openclass">{props.li_2}</NavLink></li>
          <li><NavLink to="/admin/class">{props.li_3}</NavLink></li>
          <li><NavLink to="/admin/home?p=openclass">{props.li_4}</NavLink></li>
        </ul>
      </Nav>
    );
};

export default HomeOption;
