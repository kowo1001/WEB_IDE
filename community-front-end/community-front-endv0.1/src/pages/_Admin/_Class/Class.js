import React, { Component } from 'react';
import { 
  Tab,
  Row,
  Col,
} from 'react-bootstrap';
import ListHomework from '../../../components/_Admin_components/_adm_ListHomework';
import ClassEvaluation from '../../_Admin/_Class/Evaluation'
import CreateHomework from '../../_Admin/_Class/CreateHomework'
import Community from '../../../components/_Admin_components/_adm_Community';
import ListRegister from '../../../components/_Admin_components/_adm_ListRegister';
import ListMyClass from '../../../components/ListMyClass';
import ClassTasks from '../../../components/_Admin_components/_adm_ClassTask';
import ClassInfor from '../../../components/ClassInfor';
class Class extends Component {
  constructor(props) {
    super(props);
  }
  render(){ 
    var slug = this.props.match.params.slug;
    var page = typeof this.props.match.params.page == "undefined" ? "" : this.props.match.params.page;
    slug += page;
    var contentRight = () =>{
      switch (slug) {
        case "student":
          return <ListRegister />
        case "homework":
          return <ListHomework />  
        case "homeworkevalution":
          return <ClassEvaluation />
        case "homeworkcreate":
          return <CreateHomework />
        default:
          return <Community /> 
       
      }
    }
    console.log(this.props.match.params.slug);
    return(
    <>
      <div className = "class-page container">
        <ClassInfor />
        <div className="class-instance">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={2}>
                    <ListMyClass />
                    <br/><br/>
                      < ClassTasks />
                    </Col>
                    <Col sm={9} className = "class-objects">    
                          {contentRight ()}                  
                    </Col>
                </Row>
            </Tab.Container>
        </div>
      </div>
    </>
    )
  };
}
export default Class;
