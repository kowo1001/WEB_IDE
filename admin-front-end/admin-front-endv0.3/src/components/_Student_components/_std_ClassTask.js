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
                <Link to="/student/class">학습 목차</Link>
            </ListGroup.Item>
            <ListGroup.Item >
                <Link to="/student/class/homework">과제 관리</Link>
            </ListGroup.Item>
            <ListGroup.Item >
                <Link to="/student/class/liststudent">수강생 조회</Link>
            </ListGroup.Item>
        </ListGroup>
    );
};
export default ClassTasks;
