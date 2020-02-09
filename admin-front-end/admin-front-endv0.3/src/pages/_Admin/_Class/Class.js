import React, { Component } from 'react';
import { 
  Tab,
  Row,
  Col,
} from 'react-bootstrap';
import ListHomework from '../../../layout/Class/ListHomework';
import ClassEvaluation from '../../../layout/Class/Evaluation'
import CreateHomework from '../../../layout/Class/CreateHomework'
import Community from '../../../layout/Class/Community';
import ListRegister from '../../../layout/Class/ListRegister';
import ListMyClass from '../../../components/ListMyClass';
import ClassTasks from '../../../components/ClassTask';
import ClassInfor from '../../../layout/Class/ClassInfor';
import ClassBoard from '../../../layout/Class/ClassBoard';
import ClassDocument from '../../../layout/Class/ClassDocument';
import QuestionAnswer from '../../../layout/Class/QuestionAnswer';
class Class extends Component {
  constructor(props) {
    super(props);
  }
  ClassName = () => {
    // var className = this.props.location.search;
    // className = className.substring(3, className.length);
  }
  LayoutBottomRight = () => {

  }
  render(){ 
	// var path = this.props.location.search; 
  // path = path.substring(3,path.length);
    var path = this.props.block;
    path = path.substring(3,path.length);
    var contentRight = () =>{
      switch (path) {
        case "board":
          return <ClassBoard />
        case "manage":
          return <ListRegister />
        case "homework":
		    return <ListHomework />
        case "evaluatehomework":
          return <ClassEvaluation />
        case "createhomework":
          return <CreateHomework />
        case "qa":
          return <QuestionAnswer />
        case "resources":
          return <ClassDocument />
        default:
          return <Community /> 
      }
    }
    return(
      <>
          <ClassInfor 
          // className = {this.className()}
          />
          <div className="class_instance">
              <div className = "row">
                <div className = "class_instance-top">
                  <div className = "col span-1-of-5">
                    <div className = "my_class-list">
                      <select className = "u-outline-null">
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
                <div className = "class_instance-body">
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
