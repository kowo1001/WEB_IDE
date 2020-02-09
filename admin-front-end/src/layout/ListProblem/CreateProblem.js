import React, { Component } from 'react'
import CKEditor from 'ckeditor4-react';
export default class CreateProblem extends Component {
  
    render() {
        return (
            <div className = "create_problem">
                <h2 className = "u-text-center">문제 작성</h2>
                <div className = "problem_content"> 
                    <CKEditor
                         data="<p> 문제 설명 입력하세요</p>"
                    />
                </div>
            </div>
        )
    }
}
