import React, { Component } from 'react';
import { FaSearch, FaUserGraduate } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { IoMdListBox } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import {
    Link
  } from "react-router-dom";

class ListRegister extends Component {
    
    render() {
        var  listStudent = [
            {
                index: '1',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
            {
                index: '2',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
            {
                index: '3',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
        
            {
                index: '4',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
        
            {
                index: '5',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
        
            {
                index: '6',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
        ];
        return (
            <div className="class_student">
                <h2><i class = "icon"> <FaUserGraduate /></i>수강생 관리</h2>
                <div className = "headding mr-bottom-small">
                    <select className = "select-option" required="required">
                        <option value="">이름</option>
                        <option value="">학번</option>
                        <option value="">전공</option>
                    </select>
                    <div className = "search__box">
                        <input  className = "search__box-text" type="text" placeholder="Search.."></input>
                        <button className = "search__box-btn" type="submit"><i class="icon"><FaSearch/></i></button>
                    </div>
                </div>
                <div className = "list-waiting">
                    <h3 className = "mr-bottom-small"><i class = "icon"> <IoMdListBox />&nbsp;</i>수강생 관리</h3>
                    <table class="table table-contribution" border = "1">
                        <thead>
                            <tr>
                                <th width = "5%">순위</th>
                                <th width = "10%">전공</th>
                                <th width = "10%">학번<Link><i className = "icon"><TiArrowUnsorted/></i></Link></th>
                                <th width = "10%">이름</th>
                                <th width = "10%">연락처</th>
                                <th width = "15%">이메일</th>
                                <th width = "15%">비고</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    listStudent.map((item,index) => {
                                        return(
                                            <tr key = {index}>
                                                <td>{item.index}</td>
                                                <td>{item.major}</td>
                                                <td>{item.studentID}</td>
                                                <td>{item.name}</td>
                                                <td>{item.number}</td>
                                                <td>{item.email}</td>
                                                <td className = "td-tasks">
                                                    <Link className = "btn__permission">허락</Link>
                                                    <Link className = "btn__refuse">거절</Link>
                                                </td>
                                            </tr>
                                        ) 
                                    })
                                }
                                </tbody>
                        </table>
                    </div>
                <div className = "list-registed mr-top-small">
                    <h3 className = "mr-bottom-small"><i class = "icon"> <GoChecklist />&nbsp;</i>수강생 완료 목록</h3>
                    <table class="table table-contribution" border = "1">
                        <thead>
                            <tr>
                                <th width = "5%">순위</th>
                                <th width = "10%">전공</th>
                                <th width = "10%">학번<Link><i className = "icon"><TiArrowUnsorted/></i></Link></th>
                                <th width = "10%">이름</th>
                                <th width = "10%">연락처</th>
                                <th width = "15%">이메일</th>
                                <th width = "15%">비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            listStudent.map((item,index) => {
                                return(
                                    <tr key = {index}>
                                        <td>{item.index}</td>
                                        <td>{item.major}</td>
                                        <td>{item.studentID}</td>
                                        <td>{item.name}</td>
                                        <td>{item.number}</td>
                                        <td>{item.email}</td>
                                        <td class = "td-tasks">
                                            <Link className = "btn__refuse">삭제</Link>
                                        </td>
                                    </tr>
                                ) 
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
}
export default ListRegister;


