import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';
import { Button,
} from 'react-bootstrap';
import OptionSelect from '../../../components/_Admin_components/_adm_HomeOption';
import Profile from '../../../components/Profile/Profile';

class CreateClass extends Component {
  render(){ 
    return( 
      <>
      <Profile />
      <div class = "class-page container">
       <OptionSelect /><br/>
        <div className = "class-register">  
            <form className="form-horizontal" role="form">
                  <h2>강좌 개설</h2>
                  <div class="form-group">
                      <div class="col-sm-6">
                        <label for="className" class="col-sm-3 control-label">강좌 이름: </label>
                        <input type="text" id="professor" placeholder="강좌 이름" class="form-control"/>
                      </div>
                      <div class="col-sm-6">
                        <label for="classUnit" class="col-sm-3 control-label">강좌 번호:</label>
                        <input type="text" id="classUnit" placeholder="강좌 번호" class="form-control"/>&nbsp;
                      </div>
                  </div>
                  <div class="form-group">
                      <div class="col-sm-6">
                        <label for="professor" class="col-sm-3 control-label">교수 이름: </label>
                        <input type="text" id="professor" placeholder="교수 이름" class="form-control"/>
                      </div>
                      <div class="col-sm-6">
                        <label for="ta" class="col-sm-3 control-label">조교 이름:</label>
                        <input type="text" id="ta" placeholder="조교 이름" class="form-control"/>&nbsp;
                        <Button styClass = "primary">Add</Button>
                      </div>   
                  </div>
                  <div class="form-group">
                    <div class="col-sm-9">
                      <label for="date" class="col-sm-3 control-label timeText">개설 기간:</label>
                        <div class="col-sm-7">
                            <input type="date" id="date" class="form-control"/>&nbsp;~&nbsp;
                            <input type="date" id="date" class="form-control"/> 
                        </div>
                    </div>  
                  </div>
                  <div class="form-group">
                    <div class="col-sm-6">
                      <label for="date" class="col-sm-3 control-label">이수구분:</label>
                      <div class="col-sm-9">
                          <select id="select" class="form-control">
                              <option>기초 전공</option>
                              <option>전문 전공</option>
                          </select>
                      </div>
                    </div>  
                  </div>
                  <div class="form-group">
                    <div class="col-sm-6">
                      <label for="description" class="col-sm-3 control-label">설명: </label>
                      <div class="col-sm-9"></div>
                    </div>  
                    <div class="col-sm-12">
                    <CKEditor
                      data="<p> 강좌 설명 입력하세요</p>"
                    /><br/>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                      <Button styClass = "primary" className = "btn-register">강좌 등록</Button>
                    </div>
                  </div>
                  
              </form>          
        </div>
      </div>
      </>
    )
  };
}
export default CreateClass;
