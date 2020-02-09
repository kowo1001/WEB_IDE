import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Button from '../components/Button';


class ProjectManager extends Component {
  render(){ 
    return(
    <>
    <Header />
    <div className="ProjectManager, body-height">
      <div className="button">
        <Button size="large">개인 프로젝트</Button>
        <Button color="yellow" size="large">팀 프로젝트</Button>
        <Button color="orange" size="large">공유 옵션</Button>
      </div>
    {/* </div>
      <div className = "project-manager container-fuild">
            프로젝트 관리 
      </div>
      
      <div>Task & Issues</div>
      <div className="btn-manager">
        개인 프로젝트
      </div>
      <div className="btn-manager">
        팀 프로젝트
      </div>
      <div className="btn-manager">
        공유 옵션
      </div> */}
      </div>
    </>
    )
  };
}
export default ProjectManager;
