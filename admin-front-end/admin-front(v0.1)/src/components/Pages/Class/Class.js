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
import ClassList from './classList';
import ClassTop from './classTop';


class Class extends Component {
  render(){ 
    return(
    <Router>
      <div className = "container">
       <ClassTop />
        <br/>
        <ClassList />

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
                          <RouterURL_Home />
                            <HomeWork /><hr/>
                            <HomeWork /><hr/>
                            <HomeWork /><hr/>
                            <HomeWork /><hr/>
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
export default Class;
