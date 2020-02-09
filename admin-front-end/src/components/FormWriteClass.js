import React, { Component } from 'react'
import CKEditor from 'ckeditor4-react';

export default class FormWriteClass extends Component {
   

    render() {
        return (
        <div className = "form_write">
            <form action="" method="POST" role="form">
                <legend>{this.props.title}</legend>
                <div class="form-group">
                    <div className = "form_title">
                        <b>제목 : </b>
                        <input type="text" />
                    </div>
                    <div className = "form_content">
                        <b>내용 :</b><br/>
                        <CKEditor
                            data="<p> 공지사항 내용 입력하세요</p>"
                        />
                    </div>
                    <div className = "form_file">
                        <b>첨부 파일 : </b>  <input className = "file_update" type = "file"/>                  
                    </div>
                    <div className = "u-text-center">
                        <button type="submit" class="btn_primary">{this.props.btnName}</button>
                    </div>
                </div>  
            </form>
        </div>
        )
    }
}
