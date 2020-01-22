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
import './Class.css'
import Profile from '../../Profile/Profile';
import RouterURL_Home from '../../../router/RouterURL_Home';

class HomeWork extends Component {
  render(){ 
    return(
       <div className = "homwork">
           <div className = "hw-top">
                <div className="row">
                <Table responsive class = "homework-table">
                    <tbody>
                        <tr>
                            <td> 
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h4>[일반과제] 3주차 심화프로그래밍실습과제</h4>
                                </div>     
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <ButtonGroup className="pull-right">
                                            <Button sysClass= "primary"  id = "btn-group">수정</Button>
                                            <Button sysClass= "primary" id = "btn-group">삭제</Button>
                                            <Button sysClass= "primary" id = "btn-group">평가</Button>
                                    </ButtonGroup>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    제출기간 : 2020.1.20 ~ 2020.02.3.03
                                </div>     
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                                </div>  
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    이번 과제는 클래스를 구현하는 프로그램입니다.<br/>
                                    문의 : hoggiltog@dongguk.edu
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    첨부 파일 : 심화프로그래밍.pdf
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
export default HomeWork;
