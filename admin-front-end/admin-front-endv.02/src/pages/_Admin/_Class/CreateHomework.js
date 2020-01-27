import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';

class CreateHomework extends Component {
    constructor(props) {
        super(props);
        this.state = {
          display : true,
        };
      }
      toggleChange = () => {
        this.setState({
          display : !this.state.display
        });
      }
  render(){ 
    var displayCheck;
    var width;
    var check = () => {
        if (this.state.display) {
            width = {width : '50%'}
            displayCheck = { display : 'block'}
        } else {
            displayCheck = { display : 'none'}
            width = {width : '100%'}
        }
    }
    return(
        <div className = "create-hw">
            {check()}
            <div class="row"> 
                <div className = "hw-name">
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        과제 제목
                    </div>
                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">   
                        <input type="text" name="hw-name" id="inputhw-name" class="form-control"  required="required" placeholder = "과제 제목"/>
                    </div>
                 </div>
                 <div className = "hw-time">
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        진행 기간 :         
                    </div>
                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">   
                        <input type="date" id="date" class="form-control"/>&nbsp;~&nbsp;
                        <input type="date" id="date" class="form-control"/> 
                    </div>
                 </div>
                 <div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        설명 :         
                    </div>
                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 pull-right">   
                        에디터
                        <input type="checkbox"   
                            checked={this.state.isChecked}
                            onChange={this.toggleChange} 
                        />
                    </div>
                 </div> 
                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 cke-editor" style = {width}>
                        <CKEditor
                            data="<p> 과제 설명 입력하세요</p>"
                        />
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div class="text-editor" style = {displayCheck}>
                            <textarea class="form-control" id="viewEditor" rows="19"></textarea>
                        </div>
                    </div>
                 </div><br/><br/><br/>
                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    첨부 파일 :  <input type="file" class="form-control-file"/>
                 </div>         
            </div>
            <button type="submit" class="btn btn-primary ">과제 등록</button>
        </div>
    )
  };
}
export default CreateHomework;
