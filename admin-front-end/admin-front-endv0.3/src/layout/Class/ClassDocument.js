import React, { Component } from 'react'
import { FaSearch,FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GoFilePdf } from 'react-icons/go'
import CKEditor from 'ckeditor4-react';
import SelectSearch from '../../components/SelectSearch';
import FormWriteClass from '../../components/FormWriteClass';
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
            <div className = "class_resources">
                <h2><i class = "icon"> </i>학습 자료실</h2>
                <div className = "headding">
                    <SelectSearch />
                    <Link className = "btn_write u-mr-bottom-small" to = "#" ><i className = "icon"><FaEdit/></i>작성하기</Link>
                </div>
                <div  className = "resources_content">
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
                <div className = "resources_add u-mr-top-small">
                    <FormWriteClass
                            title = "학습 자료실"
                            btnName = "학습 자료실 등록"
                        />
                </div>
            </div>
        )
    }
}
