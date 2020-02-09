import React, { Component } from 'react'
import CKEditor from 'ckeditor4-react';
export default class CreateProblem extends Component {
  
    render() {
        return (
            <div className = "create_problem">
                <h2 className = "text-center">문제 작성</h2>
                <div className = "problem_content"> 
                    <h3>문제 제목 : </h3>
                    <input className = "border-bottom" type="text" /><br/>
                    <h3>문제 내용 : </h3>
                    <CKEditor
                                    data="<p> 문제 설명 입력하세요</p>"
                    /><br/>
                    <h3>입력 내용 : </h3>
                    <CKEditor
                                    data="<p> 입력 내용 입력하세요</p>"
                    /><br/>
                    <h3>출력 내용 : </h3>
                    <CKEditor
                                    data="<p> 입력 내용 입력하세요</p>"
                    /><br/>
                    <h3>입력 예제 : </h3>
                    <CKEditor
                                    data="<p> 입력 내용 입력하세요</p>"
                    /><br/>
                    <h3>출력 예제 : </h3>
                    <CKEditor
                                    data="<p> 입력 내용 입력하세요</p>"
                    /><br/>
                </div>
            </div>
        )
    }
}
