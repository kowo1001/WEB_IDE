import React, { Component } from 'react'
import { Link } from 'react-router-dom'

var displayCheck;
export default class ClassNotice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display : false,
        }
    }
    ViewNotice(){
        this.setState({
            display : !this.state.display
        });
        if (this.state.display) {
            displayCheck = { display : 'block'}
        } else {
            displayCheck = { display : 'none'}
        }
    }
    render() {
        return (
            <div className  = "class-notice">
                <h2>공지사항</h2>
                <div className = "notice-content">
                <div className = "notice-search">
                    <select name="" id="notice-search-option" required="required">
                        <option value="">번호</option>
                        <option value="">제목</option>
                        <option value="">작성일</option>
                    </select>&nbsp;
                    <input  id="search" type="notice-text" placeholder="Search.."></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div><br/>
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th width = "10%">번호</th>
                            <th width = "35%">제목</th>
                            <th width = "10%">파일</th>
                            <th width = "15%">작성자</th>
                            <th width = "20%">작성일</th>
                            <th width = "10%">조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><Link onClick = {()=> this.ViewNotice()}>강좌 계확서 올렸습니다</Link></td>
                            <td>syllabus.pdf</td>
                            <td>홍길동</td>
                            <td>2020-03-23</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><Link onClick = {()=> this.ViewNotice()}>강좌 계확서 올렸습니다</Link></td>
                            <td>syllabus.pdf</td>
                            <td>홍길동</td>
                            <td>2020-03-23</td>
                            <td>15</td>
                        </tr>
                    </tbody>
                </table>
                <div className = "notice-content-view" style = {displayCheck} >
                    <div className = "notice-title">
                        <b>강좌 계획서 올렸습니다</b>
                    </div>
                    <div className = "notice-info">
                       작성자 : 홍길동 &nbsp;&nbsp;&nbsp;
                       작성일 : 2020-03-23&nbsp;&nbsp;&nbsp;
                       조회수 : 15
                    </div>
                    <div className = "notice-content-text">
                        성적 공시 안내<br/>
                        개별연구 교과목의 성적이 공시되었으니,<br/>
                        확인하시 바랍니다.<br/>
                        겨울 계절학기 고생 많았고, 남은 방학 알차게 보내시기 바랍니다.<br/>
                        
                        {/* <div className = "partition">
                            
                        </div> */}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
