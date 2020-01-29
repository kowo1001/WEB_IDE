import React from 'react';
import {
    Link
  } from "react-router-dom";
  import { 
    ListGroup,
  } from 'react-bootstrap';
const ClassTasks = () => {
    return (
        <ListGroup>
            <ListGroup.Item className = "class-option">
                <Link to="/admin/class">학습 목차</Link>
            </ListGroup.Item>
            <ListGroup.Item >
                <Link to="/admin/class/homework">과제 관리</Link>
            </ListGroup.Item>
            <ListGroup.Item >
                <Link to="/admin/class/student">수강생 관리</Link>
            </ListGroup.Item>
    </ListGroup>
    );
};
export default ClassTasks;
