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
import ClassTasks from '../../../components/ClassTask';
import ClassInfor from '../../../layout/Class/ClassInfor';
import ClassBoard from '../../../components/_Admin_components/ClassBoard';
class Class extends Component {
  constructor(props) {
    super(props);
  }
  courseName = () => {
    var courseName = this.props.location.search;
    courseName = courseName.substring(3,courseName.length);
  }
  LayoutBottomRight = () => {

  }
  render(){ 
	var path = this.props.location.search;
	path = path.substring(3,path.length);
    var contentRight = () =>{
      switch (path) {
        case "board":
          return <ClassBoard />
        case "manage":
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
    return(
      <>
          <ClassInfor 
          courseName = {this.courseName()}
          />
          <div className="class__instance">
              <div className = "row">
                <div className = "class__instance-top">
                  <div className = "col span-1-of-5">
                    <div className = "my_class-list">
                      <select>
                        <option>심화프로그래밍_01</option>
                        <option>심화프로그래밍_02</option>
                        <option>심화프로그래밍_03</option>
                      </select>
                    </div>
                  </div>
                  <div className = "col span-4-of-5">
                    <div className = "path-task">
                      <span>강의실 > 심화프로그래밍_01 > 학습목차</span>
                    </div>
                  </div>
              	</div>

				{/* Navigation 에 잇는 창을 선택함에 따라서 출력함 */}
                <div className = "class__instance-body">
					<div className = "col span-1-of-5">
						<div className = "left-box">
							<ClassTasks
							tasks = {['공지 사항','학습 목차', '과제 관리', '수강생 관리']}
							/>
						</div>
					</div>
					<div className = "col span-4-of-5">
						<div className = "right-box">
							{contentRight()}
						</div>
					</div>
				</div>
			</div>
          </div>
      </>
    )
  };
}
export default Class;
