import React, { Component } from 'react';
import { 
  Container
} from 'react-bootstrap';
import TableCol4 from '../../components/Table/Table-col-4';
import { Link } from 'react-router-dom';

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
            name : '자료구죠_03',
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
  
      var myDoneProblem = [
        {
            order : 1,
            id : 123,
            date : '2020.02.26(토요일)',
            description : '벌찍기 프로그램.....',
        },
        {
            order : 2,
            id : 33,
            date : '2020.02.27(일요일)',
            description : '벌찍기 프로그램.....',
        },
        {
            order : 3,
            id : 134,
            date : '2020.02.28(화요일)',
            description : '벌찍기 프로그램.....',
        }
    ]
    var myListDoneProblem = () => {
        return (
            <TableCol4 
            title1 = "ID"
            title2 = "완료 날짜"
            title3 = "문제"
            title4 = "IDE 가기"
            data = { myDoneProblem }
            >
            </TableCol4>
        );
      };
      var myListDoingProblem = () => {
        return (
            <TableCol4 
            title1 = "ID"
            title2 = "미지작 날짜"
            title3 = "문제"
            title4 = "IDE 가기"
            data = { myDoneProblem }
            >
            </TableCol4>
        );
      };

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
                myRegisterClass.map((item,index) => {
                        return (
                        <tr key = {index}>
                            <td>{item.id}</td>
                            <td>{item.unit}</td>
                            <td><Link to = {`admin/class?p=${item.name}`} >{item.name}</Link></td>
                            <td>{item.professor}</td>
                        </tr>
                    )
                })  
            }
            </tbody>
        </table>
)
  };
}
export default MyListCoures;
