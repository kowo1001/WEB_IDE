import React, { Component } from 'react';
import TableCol6 from '../Table/Table-col-6';
import TableCol7 from '../Table/Table-col-7';
import { FaRegListAlt } from "react-icons/fa";
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
            <>
                <div className="student">
                        <div className = "paging_bottom_bar_1">
                            <h3><b><FaRegListAlt/> &nbsp;수강생 대기 목록</b></h3>
                        </div>
                        <div className = "list-waiting">
                            <table class="table table-contribution" border = "1">
                            <thead>
                                <tr>
                                    <th width = "5%">#</th>
                                    <th width = "15%">전공</th>
                                    <th width = "15%">학번</th>
                                    <th width = "15%">이름</th>
                                    <th width = "15%">연락처</th>
                                    <th width = "10%">이메일</th>
                                    <th width = "10%">상태</th>
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
                                            <td>
                                                <Link className = "btn__primary">허락</Link>
                                                <Link className = "btn__primary">거절</Link>
                                            </td>
                                        </tr>
                                    ) 
                                })
                               }
                            </tbody>
                        </table>
                        </div>
                        <div className = "paging_bottom_bar_2">
                            <h3><b><FaRegListAlt/> &nbsp;수강생 완료 목록</b></h3>
                        </div>
                        <div className = "list-register">
                            <table class="table table-contribution" border = "1">
                                <thead>
                                    <tr>
                                        <th width = "5%">#</th>
                                        <th width = "15%">전공</th>
                                        <th width = "15%">학번</th>
                                        <th width = "15%">이름</th>
                                        <th width = "15%">연락처</th>
                                        <th width = "10%">이메일</th>
                                        <th width = "10%">상태</th>
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
                                                <td>
                                                    <Link className = "btn__primary">삭제</Link>
                                                </td>
                                            </tr>
                                        ) 
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                </div>
            </>
        )
    };
}
export default ListRegister;


