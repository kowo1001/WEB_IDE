import React, { Component } from 'react';
import { FaSearch, FaUserGraduate } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { IoMdListBox } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import {
    Link
  } from "react-router-dom";
import SelectSearch from '../../components/SelectSearch';

class ListRegister extends Component {
    
    render() {
        var  listStudent = [
            {
                index: '1',
                major: '컴퓨터공학',
                studentID: '2018120***',
                name: '김동*',
                number: '010-8849-7***',
                email: 'dong***@dongguk.edu',
        
            },
            {
                index: '2',
                major: '컴퓨터공학',
                studentID: '2018120***',
                name: '김동*',
                number: '010-8849-7***',
                email: 'dong***@dongguk.edu',
        
            },
            {
                index: '3',
                major: '컴퓨터공학',
                studentID: '2018120***',
                name: '김동*',
                number: '010-8849-7***',
                email: 'dong***@dongguk.edu',
        
            },
        
            {
                index: '4',
                major: '컴퓨터공학',
                studentID: '2018120***',
                name: '김동*',
                number: '010-8849-7***',
                email: 'dong***@dongguk.edu',
        
            },
        
            {
                index: '5',
                major: '컴퓨터공학',
                studentID: '2018120***',
                name: '김동*',
                number: '010-8849-7***',
                email: 'dong***@dongguk.edu',
        
            },
        
            {
                index: '6',
                major: '컴퓨터공학',
                studentID: '2018120***',
                name: '김동*',
                number: '010-8849-7***',
                email: 'dong***@dongguk.edu',
        
            },
        ];
        return (
            <div className="class_student">
                <h2><i class = "icon"> <FaUserGraduate /></i>수강생 관리</h2>
                <div className = "headding u-mr-bottom-small">
                   <SelectSearch />
                </div>
                <div className = "list-waiting">
                    <h3 className = "u-mr-bottom-small"><i class = "icon"> <IoMdListBox />&nbsp;</i>수강생 조회</h3>
                    <table class="table table-contribution" border = "1">
                        <thead>
                            <tr>
                                <th width = "5%">순위</th>
                                <th width = "10%">전공</th>
                                <th width = "10%">학번<Link><i className = "icon"><TiArrowUnsorted/></i></Link></th>
                                <th width = "10%">이름</th>
                                <th width = "10%">연락처</th>
                                <th width = "15%">이메일</th>
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


