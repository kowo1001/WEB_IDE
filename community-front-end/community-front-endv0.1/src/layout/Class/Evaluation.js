import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdSpeakerNotes } from "react-icons/md";
import { Link } from 'react-router-dom';
import { TiArrowUnsorted } from "react-icons/ti";
import CKEditor from 'ckeditor4-react';
import Button from '../../components/Button';

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
            <h2><i className = "icon"> <MdSpeakerNotes /></i>제출 정보</h2>
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
                <div className="profile_right_works">
                    <Button size="large" color="yellow"> <Link to="#" ><i className = "icon"><FaEdit/></i>저장</Link></Button>
                </div>
            </div>
            <div className = "list_student">
                <table class="table table-contribution" border = "1">
                    <thead>
                        <tr>
                            <th width = "10%">기본정보</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{
                            <table class="table table-contribution" border = "1">
                                    <thead>
                                        <tr>
                                            <th width = "7%">제출정보</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            <td >ddd</td>

                                        }
                                    </tbody>
                                </table>

                            }
                        </td>
                        
                    </tbody>
                    <thead>
                        <tr>
                            <th width = "7%">제출정보</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <td>ddd</td>

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
  };
}
export default ClassEvaluation;
