import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import { Button,
    Dropdown,
    DropdownButton,
  Table,
  ListGroup,
  Tab,
  Row,
  Col,
  Navbar,
  Container
} from 'react-bootstrap';
import './Class.css'
import Profile from '../../Profile/Profile';
import RouterURL_Home from '../../../router/RouterURL_Home';
import HomeWork from './HomeWork';


class ClassStudent extends Component {
  render(){ 
    return(
    <Router>
      <div className = "container">
        <div className = "class-view">
          <div className = "class-name">
            <h1>심화 프로그래밍_01</h1>
          </div>
          <div className = "class-info pull-right">
              <h4>교수명 : 손윤식 / 조교명 : 김동효, 장종욱 </h4>
          </div>
        </div>
    
        <br/>
        <select class="in-drop" id="searchOption">
                <option value="class" className="in-of">CSE1012-심화프로그래밍 01</option>
                <option value="class" className="in-of">CSE1013-심화프로그래밍 02</option>
                <option value="class" className="in-of">CSE1014-심화프로그래밍 03</option>
        </select>
        
        <div className="class-instance">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={3}>
                        <ListGroup>
                                <ListGroup.Item action href="/">
                                학습 목차
                                </ListGroup.Item>
                                <ListGroup.Item action href="">
                                수강생 관리
                                </ListGroup.Item>
                                <ListGroup.Item action href="/">
                                과제 관리
                                </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Button styClass = "primary" className = "pull-right"> 과제 등록 </Button><br/><br/>
                        <div>




                        
                        </div>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
      </div>
    </Router>
    )
  };
}
export default ClassStudent;
