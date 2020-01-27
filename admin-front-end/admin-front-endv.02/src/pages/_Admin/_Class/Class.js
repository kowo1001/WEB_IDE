import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import { 
  ListGroup,
  Tab,
  Row,
  Col,
} from 'react-bootstrap';
import HomeworkList from '../../../components/_Admin_components/HomeworkList';
import ClassEvaluation from '../../_Admin/_Class/Evaluation'
import CreateHomework from '../../_Admin/_Class/CreateHomework'
import Community from '../../../components/_Admin_components/Community';
import ControlClassRegister from '../../../components/_Admin_components/ControlClassRegister';
import ListMyClass from '../../../components/ListMyClass';
class Class extends Component {
  render(){ 
    return(
    <Router>
      <div className = "class-page container">
        <div className="class-instance">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={2}>
                    <ListMyClass />
                    <br/><br/>
                        <ListGroup>
                                <ListGroup.Item className = "class-option">
                                    <Link to="/class">학습 목차</Link>
                                </ListGroup.Item>
                                <ListGroup.Item >
                                    <Link to="/class/student">수강생 관리</Link>
                                </ListGroup.Item>
                                <ListGroup.Item >
                                    <Link to="/class/evalution">과제 관리</Link>
                                </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={9} className = "class-objects">                      
                         {/* <HomeworkList/> */}
                         {/* <ClassEvaluation /> */}
                         {/* <CreateHomework/> */}
                         {/* <Community/> */}
                         <ControlClassRegister />
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
