import React from 'react';
import {NavLink} from "react-router-dom";
import classname from 'classname';


const HomeOption = (props) => {
  return (
    <ul className = "ul-nolist-inline">
    {
        props.headerText.map((item,index) => 
        <li key={`li-${index}`} className={classname({ 'select': item.isSelected })}><NavLink activeClassName="nav-selected-body" exact to = {`/student/home?p=${item.page}`}>{item.title}</NavLink></li>
      )
    }
  </ul>
  )
};

export default HomeOption;
