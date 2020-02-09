import React from 'react';
import {NavLink} from "react-router-dom";


const HomeOption = (props) => {
    return (
      <ul className = "ul-nolist-inline">
      {
         props.headerText.map((item,index) => 
          <li><NavLink activeClassName="nav-selected-body" exact to = {`/admin/home?p=${item.page}`}>{item.title}</NavLink></li>
        )
      }
    </ul>
    )
};

export default HomeOption;
