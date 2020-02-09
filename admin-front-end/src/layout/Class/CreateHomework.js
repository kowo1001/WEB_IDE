import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';
import { IoIosCreate } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GoFilePdf } from "react-icons/go";
var displayCheck;
var width;
class CreateHomework extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display : true,
    };
    }
    toggleChange = (e) => {
        e.preventDefault();
        this.setState({
            display : !this.state.display
        });
        if (this.state.display) {
            width = {width : '48%'}
            displayCheck = { display : 'block'}
        } else {
            displayCheck = { display : 'none'}
            width = {width : '100%'}
        }
    }
  render(){ 
    return(
        <div className = "class_create-homework">
            <h2><i className = "icon"> <IoIosCreate /></i>과제 등록</h2>
            <div className = "homework_content">
                <form action="" method="POST" role="form">
                    <legend>과제 작성</legend>
                    <div class="form-group">
                        <div className = "homework-title">
                            <b>제목 : </b>
                            <input className = "border-bottom" type="text" /><br/>
                            <b> 진행 기간 : </b>
                            <input type="date" id="date" />&nbsp;~&nbsp;
                            <input type="date" id="date" /> 
                        </div>

                        <div className = "homework-content">
                            <b>내용 :</b>
                            <div className = "row">
                                <div class="col span-1-of-2 cke-editor" style = {width}>
                                    <CKEditor
                                        data="<p> 과제 설명 입력하세요</p>"
                                    />
                                </div>
                                <div class="col span-1-of-2 all-no">
                                    <div class="text-editor" style = {displayCheck}>
                                        <textarea  id="viewEditor" rows="25"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className = "homework-file">
                                <b>첨부 파일</b> : <input type="file" />                          
                            </div>
                            <div className = "u-text-center ">
                            <button type="submit" className="btn_primary">과제 등록</button>
                            </div><br/>
                        </div>  
                    </div>
                </form>
            </div>
        </div>
    )
  };
}
export default CreateHomework;
