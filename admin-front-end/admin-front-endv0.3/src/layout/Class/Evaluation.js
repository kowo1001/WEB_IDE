import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdSpeakerNotes } from "react-icons/md";
import { Link } from 'react-router-dom';
import { TiArrowUnsorted } from "react-icons/ti";
import CKEditor from 'ckeditor4-react';

var displayCheck;
class ClassEvaluation extends Component {
    constructor(props){
        super(props);
        this.state = {
            display : true
        }
    }
    checkCKEditor = () => {
        this.setState({
            display : !this.state.display
        });
        if (this.state.display) {
            displayCheck = { display : 'block'}
        } else {
            displayCheck = { display : 'none'}
        }
    }
  
    render(){ 
        var listEvaluation = [
            {
                no : 2017112115,
                major : '컴퓨터 공학과',
                name : '홍길동',
                date : '2020.01.01',
                file : 'report.pdf',
                source : 'source.c',
                score : '0',
            },
            {
                no : 2017112117,
                major : '컴퓨터 공학과',
                name : '홍길동',
                date : '2020.01.01',
                file : 'report.pdf',
                source : 'source.c',
                score : '0',
            },
            {
                no : 2017112112,
                major : '컴퓨터 공학과',
                name : '홍길동',
                date : '2020.01.01',
                file : 'report.pdf',
                source : 'source.c',
                score : '0',
            },
            {
                no : 2017112111,
                major : '컴퓨터 공학과',
                name : '홍길동',
                date : '2020.01.01',
                file : 'report.pdf',
                source : 'source.c',
                score : '0',
            },
            {
                no : 2017112119,
                major : '컴퓨터 공학과',
                name : '홍길동',
                date : '2020.01.01',
                file : 'report.pdf',
                source : 'source.c',
                score : '0',
            },
            {
                no : 2017112111,
                major : '컴퓨터 공학과',
                name : '홍길동',
                date : '2020.01.01',
                file : 'report.pdf',
                source : 'source.c',
                score : '0',
            }
        ]
    return(            
        <div className = "class_evaluation">
            <h2><i className = "icon"> <MdSpeakerNotes /></i>과제 평가</h2>
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
                <Link className = "btn__write mr-bottom-small" ><i className = "icon"><FaEdit/></i>저장</Link>
            </div>
            <div className = "list_student">
                <table class="table table-contribution" border = "1">
                    <thead>
                        <tr>
                            <th width = "10%">학번<Link><i className = "icon"><TiArrowUnsorted/></i></Link></th>
                            <th width = "10%">학과</th>
                            <th width = "8%">이름</th>
                            <th width = "10%">제출일지</th>
                            <th width = "10%">보고서</th>
                            <th width = "10%">소스코드</th>
                            <th width = "7%">평가점수<Link><i className = "icon"><TiArrowUnsorted/></i></Link></th>
                            <th width = "5%">비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listEvaluation.map((item,index) => {
                            return(
                                <tr key = {index}>
                                    <td>{item.no}</td>
                                    <td>{item.major}</td>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.file}</td>
                                    <td>{item.source}</td>
                                    <td><input type="text" size = "1" placeholder = "0"/></td>
                                    <td class = "td-tasks">
                                        <button  onClick = {() => this.checkCKEditor() } style = {{cursor: 'pointer'}} className = "btn">보기</button>
                                        <button  onClick = {() => this.checkCKEditor() } style = {{cursor: 'pointer'}} className = "btn">쓰기</button>
                                    </td>
                                </tr>
                            ) 
                        })
                        }
                    </tbody>
                </table>
            </div>
            <div class="write_evaluation mr-top-small" style = {displayCheck}>
                <h2><i className = "icon"><FaEdit/></i>평가 작성</h2>
                <CKEditor
                    data="<p> 과제 설명 입력하세요</p>"
                />
            </div>
        </div>
    )
  };
}
export default ClassEvaluation;
