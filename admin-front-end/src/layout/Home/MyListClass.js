import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TiArrowRightThick } from 'react-icons/ti';

class MyListCoures extends Component {
  render(){ 
    var myRegisterClass = [
        {
            id : 1,
            name : '심화프로그래밍_01',
            unit : 'CSE1012',
            professor : '김가영'
        },
        {
            id : 2,
            name : '기초프로그래밍_02',
            unit : 'CSE1013',
            professor : '김가영'
        },
        {
            id : 3,
            name : '자료구조_03',
            unit : 'CSE1011',
            professor : '김가영'
        },
        {
            id : 4,
            name : '웹프로그래밍_03',
            unit : 'CSE1010',
            professor : '김가영'
        },
    ]
    return(
        <table border="1" className="table table-contribution">
            <thead>
                <tr>
                    <th width = "5%"> #</th>
                    <th width = "20%">과목명</th>
                    <th width = "20%">과목 코드</th>
                    <th width = "20%">담당 교수</th>
                </tr>
            </thead>
            <tbody>
            {
                myRegisterClass.map((item,index) => (
                    <tr key = {index}>
                        <td>{item.id}</td>
                        <td>{item.unit}</td>
                        <td><Link to = {`/admin/class?p=${item.name}`} >{item.name}<TiArrowRightThick /></Link></td>
                        <td>{item.professor}</td>
                    </tr>
                ))  
            }
            </tbody>
        </table>
)
  };
}
export default MyListCoures;
