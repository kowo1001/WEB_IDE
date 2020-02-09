import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

import { 
   ButtonGroup,
   Table,
} from 'react-bootstrap';
class Homework extends Component {
  render(){ 
    return(
       <div className = "homework">
            <div className = "homework_title">
                <div className = "title">
                    <b>[일반과제] 개밸연구 보고서 [진행]</b>
                </div>
                <div className = "tasks">
                    <ul className = "ul-nolist-inline">
                        <li><Link to = "class?p=createhomework" className = "btn__classtask">수정</Link></li>
                        <li><Link className = "btn__classtask">삭제</Link></li>
                        <li><Link to = "class?p=evaluatehomework" className = "btn__classtask">평가</Link></li>
                    </ul>
                </div>
            </div>
            <div className = "homework_file">
                <span>제출기간 : </span>
                <b>2020.1.20 ~ 2020.03.02</b>
            </div>
            <div className = "homework_content">
                이번 과제는 클래스를 구현하는 프로그램입니다.<br/>
                문의 : hoggiltog@dongguk.edu
            </div>
            <div className = "homework_file">
                <b>첨부 파일 : </b>
                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
            </div>
        </div>
    )
  };
}
export default Homework;
