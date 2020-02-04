import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import { Button,
    ButtonGroup,
  Table,
  ListGroup,
  Tab,
  Row,
  Col,
  Navbar,
  Container
} from 'react-bootstrap';
class Homework extends Component {
  render(){ 
    return(
        <div className = "homwork">
        <div className = "hw-top">
             <div className="row">
             <Table responsive className = "homework-table">
                 <tbody>
                     <tr>
                         <td> 
                             <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                 <h4><b>[일반과제] 1주차 심화프로그래밍실습과제</b></h4>
                             </div>     
                             <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 class-talks">
                                 <ButtonGroup className="pull-right">
                                    <button className = "btn btn-primary"> <Link to="/admin/class/homework/evalution">제출 정보</Link></button>
                                 </ButtonGroup>
                             </div>
                         </td>
                     </tr>
                     <tr>
                         <td> 
                             <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                 제출기간 : <b> 2020.1.20 ~ 2020.02.3.03 </b>
                             </div>     
                             <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                 
                             </div>  
                         </td>
                     </tr>
                     <tr>
                         <td> 
                             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                 이번 과제는 클래스를 구현하는 프로그램입니다.<br/>
                                 문의 : hoggiltog@dongguk.edu
                             </div>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                 첨부 파일 : &nbsp;
                                 <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                             </div>
                         </td> 
                     </tr>
                 </tbody>
             </Table>
             </div>
         </div>      
     </div>
    )
  };
}
export default Homework;
