import React from 'react';
import {
    Link,NavLink
  } from "react-router-dom";
const ClassTasks = (props) => {
    console.log(props.tasks);
    return (
       <>
        <ul className = "navigation ul-nolist-inline">
            <li><NavLink  to = "class?p=board" activeClassName = "nav-selected-class" >{props.tasks[0]}</NavLink></li>
            <li><NavLink  to = "class?p=learning">{props.tasks[1]}</NavLink></li>
            <li><NavLink  to = "class?p=homework">{props.tasks[2]}</NavLink></li>
            <li><NavLink  to = "class?p=manage">{props.tasks[3]}</NavLink></li>
        </ul>
       </>
    );
};
export default ClassTasks;
