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
import ListMyClass from '../../../components/ListMyClass';
import ClassInfor from '../../../components/ClassInfor';
import ClassTasks from '../../../components/Student_components/ClassTasks';
import Community from '../../../components/Student_components/Community';
import ListRegister from '../../../components/Student_components/ListRegister';
import ListHomework from '../../../components/Student_components/ListHomework';
import ClassNotice from '../../../components/Student_components/ClassNotice';
class ClassStudent extends Component {
  constructor(props){
    super(props);
  }
  render(){ 
    var slug = this.props.match.params.slug;
    var page = typeof this.props.match.params.page === "undefined" ? "" : this.props.match.params.page;
    slug += page;
    var contentRight = () =>{ 
          switch (slug) {
          case "notice":
            return <ClassNotice />
          case "liststudent":
            return <ListRegister />
          case "homework":
            return <ListHomework />  
          default:
            return <Community />
      }
    }
    return(
      <div className = "class-page container">
        <ClassInfor />
        <div className="class-instance">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={2}>
                    <ListMyClass />
                    <br/><br/>
                        <ClassTasks />
                    </Col>
                    <Col sm={9} className = "class-objects">                      
                        {contentRight()}
                    </Col>
                </Row>
            </Tab.Container>
        </div>
      </div>
    )
  };
}
export default ClassStudent;
