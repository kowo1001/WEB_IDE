import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { GoFilePdf } from "react-icons/go";
export default class ClassViewItem extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className = "form_itemview">
                <div className = "form_itemview-title">
                    <b>강좌 계획서 올렸습니다</b>
                    <div className = "tasks">
                        <Link className = "btn-primary" to = "#"><i className = "far fa-edit">&nbsp;</i>수정</Link>&nbsp;
                        <Link className = "btn-primary" to = "#"><i className = "fas fa-eraser">&nbsp;</i>삭제</Link>
                    </div>
                </div>
                <div className = "form_itemview-information">
                    <b>작성자</b> : 홍길동 &nbsp;&nbsp;&nbsp;
                    <b> 작성일 </b>: 2020-03-23&nbsp;&nbsp;&nbsp;
                    <b>조회수 </b>: 15
                </div>
                <div className = "form_itemview-content">
                    성적 공시 안내<br/>
                    개별연구 교과목의 성적이 공시되었으니,<br/>
                    확인하시 바랍니다.<br/>
                    겨울 계절학기 고생 많았고, 남은 방학 알차게 보내시기 바랍니다.<br/>
                    {/* <div className = "partition">
                        
                    </div> */}
                </div>
                <div className = "form_itemview-file">
                        <b>첨부 파일 : </b> <Link to = "#" >syllabus.pdf<GoFilePdf/></Link>
                </div>
            </div>
        )
    }
}
