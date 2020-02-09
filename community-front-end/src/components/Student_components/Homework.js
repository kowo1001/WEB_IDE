import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import { 
  ButtonGroup,
  ListGroup,
  Tab,
  Row,
  Col,
  Navbar,
  Container
} from 'react-bootstrap';
import Button from '../../components/Button';
import Table from '../../components/Table';


class Homework extends Component {
  render(){ 
    return(
        <div className = "homwork">
        <div className = "hw-top">
            {/* <table className="table_homework" border = "1"> */}
             <Table className="Table-homework">
                 <tbody>
                    <tr>
                        <th colSpan="2"> 
                                 <h4><b>[일반과제] 1주차 심화프로그래밍실습과제</b></h4>
                        </th>
                        <td>
                        </td>
                        <td>     
                             <div>
                                    <Button color="orange" size="large"><Link to="/admin/class/homework/evalution">제출 정보</Link></Button>
                             </div>
                         </td>
                     </tr>
                     <tr>
                         <td>제출 기간</td>
                         <td> 
                             <div>
                                2020.03.02 ~ 2020.03.08
                             </div>     
                         </td>
                         <td>    
                         </td>
                     </tr>
                     <tr>
                         <td>
                             과제 설명
                         </td>
                         <td> 
                             <div>
                                이번 과제는 클래스를 구현하는 프로그램입니다.<br/>
                                 {/* 문의 : hoggiltog@dongguk.edu */}
                             </div>
                         </td>
                         <td> 
                         </td>
                     </tr>
                     <tr>
                         <td>
                             첨부 파일
                         </td>
                         <td>
                             <div>
                                 <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                             </div>
                         </td>
                         <td>
                         </td> 
                     </tr>
                 </tbody>
             </Table>
             </div>
         </div>      
    )
  };
}
export default Homework;
