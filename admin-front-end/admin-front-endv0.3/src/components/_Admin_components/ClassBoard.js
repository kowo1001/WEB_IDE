import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CKEditor from 'ckeditor4-react';
import { MdSpeakerNotes } from "react-icons/md";
import { GoFilePdf } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
var displayCheck;
var displayCheckWriteNote;
export default class ClassBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display : true,
            displayWriteNote : true,
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
    writeNotice(){
        this.setState({
            displayWriteNote : !this.state.displayWriteNote
        });
        if (this.state.displayWriteNote) {
            displayCheckWriteNote = { display : 'block'}
        } else {
            displayCheckWriteNote = { display : 'none'}
        }
    }
    render() {
        return (
            <div className  = "class-board">
                <h2><i class = "icon"> <MdSpeakerNotes /></i>공지사항</h2>
                <div className = "headding">
                    <select className = "select-option" required="required">
                        <option value="">번호</option>
                        <option value="">제목</option>
                        <option value="">작성일</option>
                    </select>
                    <div className = "search__box">
                        <input  className = "search__box-text" type="text" placeholder="Search.."></input>
                        <button className = "search__box-btn" type="submit"><i class="icon"><FaSearch/></i></button>
                    </div>
                    <Link className = "btn__write mr-bottom-small" type="button" onClick = {()=> this.writeNotice()}><i className = "icon"><FaEdit/></i>글쓰기</Link>
                </div>
                <div  className = "board__content">
                    <table class="table table-contribution" border = "1">
                        <thead>
                            <tr>
                                <th width = "10%">번호</th>
                                <th width = "35%">제목</th>
                                <th width = "15%">파일</th>
                                <th width = "15%">작성자</th>
                                <th width = "10%">작성일</th>
                                <th width = "10%">조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><Link onClick = {()=> this.ViewNotice()}>강좌 계확서 올렸습니다</Link></td>
                                <td><Link>syllabus.pdf<GoFilePdf/></Link></td>
                                <td>홍길동</td>
                                <td>2020-03-23</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><Link onClick = {()=> this.ViewNotice()}>강좌 계확서 올렸습니다</Link></td>
                                <td><Link>syllabus.pdf<GoFilePdf/></Link></td>
                                <td>홍길동</td>
                                <td>2020-03-23</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><Link onClick = {()=> this.ViewNotice()}>강좌 계확서 올렸습니다</Link></td>
                                <td><Link>syllabus.pdf<GoFilePdf/></Link></td>
                                <td>홍길동</td>
                                <td>2020-03-23</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><Link onClick = {()=> this.ViewNotice()}>강좌 계확서 올렸습니다</Link></td>
                                <td><Link>syllabus.pdf<GoFilePdf/></Link></td>
                                <td>홍길동</td>
                                <td>2020-03-23</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><Link onClick = {()=> this.ViewNotice()}>강좌 계확서 올렸습니다</Link></td>
                                <td><Link>syllabus.pdf<GoFilePdf/></Link></td>
                                <td>홍길동</td>
                                <td>2020-03-23</td>
                                <td>15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                


                <div className = "board__content-view mr-top-small mr-bottom-small" style = {displayCheck} >
                    <div className = "board-title">
                        <b>강좌 계획서 올렸습니다</b>
                        <div className = "tasks">
                            <Link className = "btn-primary"><i className = "far fa-edit">&nbsp;</i>수정</Link>&nbsp;
                            <Link className = "btn-primary"><i className = "fas fa-eraser">&nbsp;</i>삭제</Link>
                        </div>
                    </div>
                    <div className = "board-infor">
                        <b>작성자</b> : 홍길동 &nbsp;&nbsp;&nbsp;
                        <b> 작성일 </b>: 2020-03-23&nbsp;&nbsp;&nbsp;
                        <b>조회수 </b>: 15
                    </div>
                    <div className = "board-content">
                        성적 공시 안내<br/>
                        개별연구 교과목의 성적이 공시되었으니,<br/>
                        확인하시 바랍니다.<br/>
                        겨울 계절학기 고생 많았고, 남은 방학 알차게 보내시기 바랍니다.<br/>
                        {/* <div className = "partition">
                            
                        </div> */}
                    </div>
                    <div className = "board-file">
                          <b>첨부 파일 : </b> <Link>syllabus.pdf<GoFilePdf/></Link>
                    </div>
                </div>


                <div className = "board__content-write" style = {displayCheckWriteNote}>
                    <form action="" method="POST" role="form">
                        <legend>공지 작성</legend>
                        <div class="form-group">
                            <div className = "board-title">
                                <b>제목 : </b>
                                <input type="text" />
                            </div>
                            <div className = "board-content">
                                <b>내용 :</b><br/>
                                <CKEditor
                                    data="<p> 공지사항 내용 입력하세요</p>"
                                />
                            </div>
                            <div className = "board-file">
                                <b>첨부 파일 : </b> <Link>syllabus.pdf<GoFilePdf/></Link>                              
                            </div>
                            <button type="submit" class="btn__primary">공지 등록</button>
                        </div>  
                    </form>
                </div>

            </div>
        )
    }
}
