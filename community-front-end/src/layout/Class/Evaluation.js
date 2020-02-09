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
                    <Link className = "btn__save mr-bottom-small" ><i className = "icon"><FaEdit/></i>&nbsp;프로젝트 생성</Link>  
            </div>
            <div className = "list_student">
                <table class="table table-contribution" border = "1">
                    <thead>
                        <tr>
                            <th  colspan="2" width = "10%">기본정보</th>
                        </tr>

                    </thead>
                    <tbody>

                            <tr>
                                <th width ="15%">
                                    과제명
                                </th>
                                <td>
                                    1차 과제
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    제출기간
                                </th>
                                <td>
                                    2019-04-16 00:00 ~ 2019-05-13 23:59
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    과제 내용
                                </th>
                                <td>
                                    <p>1차 과제 제출은 아래 파일명 양식에 맞추어 수정 후 제출바랍니다.</p>
                                    <p>
                                        <br></br>
                                    </p>
                                    <p>
                                        파일명 : "학번_성명_1차과제"&nbsp;
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    참고 자료
                                </th>
                                <td>

                                </td>
                            </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>

                    <thead>
                            <tr>
                                <th colspan="2" width = "15%">제출정보</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                제출자
                            </th>
                            <td>
                                홍길동(201515)
                            </td>
                        </tr>
                        <tr>
                            <th>
                                과제설명
                            </th>
                            <td>
                                하노이탑 구현 과제
                            </td>
                        </tr>
                        <tr>
                            <th>
                                첨부파일
                            </th>
                            <td>
                                201515_홍길동_1차과제.hwp
                            </td>
                        </tr>
                        <tr>
                            <th>
                                제출상태
                            </th>
                            <td>
                                제출완료
                            </td>
                        </tr>
                        <tr>
                            <th>
                                과제제출일시
                            </th>
                            <td>
                                2019-04-28 19:14
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
  };
}
export default ClassEvaluation;
