import React, { Component } from 'react'
import { FaSearch,FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GoFilePdf } from 'react-icons/go'
import CKEditor from 'ckeditor4-react';
export default class ClassDocument extends Component {
  
    render() {
        var listDocuments = [
            {
                "index" : 1,
                "title" : "1주차 과제 파일 추가",
                "week" : 1,
                "file" : "week_1.pdf",
                "author" : "홍길동",
                "date" : "2020.03.20",
                "view" : 20,
            },
            {
                "index" : 2,
                "title" : "2주차 과제 파일 추가",
                "week" : 2,
                "file" : "week_2.pdf",
                "author" : "홍길동",
                "date" : "2020.03.20",
                "view" : 20,
            },
            {
                "index" : 3,
                "title" : "3주차 과제 파일 추가",
                "week" : 3,
                "file" : "week_2.pdf",
                "author" : "홍길동",
                "date" : "2020.03.20",
                "view" : 20,
            },
            {
                "index" : 4,
                "title" : "4주차 과제 파일 추가",
                "week" : 4,
                "file" : "week_4.pdf",
                "author" : "홍길동",
                "date" : "2020.03.20",
                "view" : 20,
            },

        ]
        return (
            <div className = "class_document">
                <h2><i class = "icon"> </i>학습 자료실</h2>
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
                    <Link className = "btn__write mr-bottom-small" to = "#" ><i className = "icon"><FaEdit/></i>작성하기</Link>
                </div>
                <div  className = "document_content">
                    <table class="table table-contribution" border = "1">
                        <thead>
                            <tr>
                                <th width = "5%">No</th>
                                <th width = "30%">제목</th>
                                <th width = "5%">주차</th>
                                <th width = "15%">파일</th>
                                <th width = "15%">등록자</th>
                                <th width = "10%">작성일</th>
                                <th width = "5%">조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listDocuments.map((item,index) => {
                                    return (
                                        <tr key = {index}>
                                            <td>{item.index}</td>
                                            <td><Link onClick = {()=> this.ViewNotice()} to = "#" >{item.title}</Link></td>
                                            <td>{item.week}</td>
                                            <td><Link>{item.file}<GoFilePdf/></Link></td>
                                            <td>{item.author}</td>
                                            <td>{item.date}</td>
                                            <td>{item.view}</td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
                <div className = "document_add mr-top-small">
                    <form action="" method="POST" role="form">
                        <legend >학습 자료실 작성</legend>
                        <div class="form-group">
                            <div className = "board-title">
                                <b>제목 : </b>
                                <input className = "border-bottom" type="text" />
                            </div>
                            <div className = "board-content">
                                <b>내용 :</b><br/>
                                <CKEditor
                                    data="<p> 공지사항 내용 입력하세요</p>"
                                />
                            </div>
                            <div className = "board-file">
                                <b>첨부 파일 : </b> <input type = "file"/>                         
                            </div>
                            <button type="submit" class="btn__primary">공지 등록</button>
                        </div>  
                    </form>
                </div>
            </div>
        )
    }
}
