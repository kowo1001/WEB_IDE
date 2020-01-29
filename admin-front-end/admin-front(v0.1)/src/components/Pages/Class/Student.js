import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import {
    Button,
    Dropdown,
    DropdownButton,
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
import HomeWork from './HomeWork';
import ClassList from './classList';
import ClassTop from './classTop';
import TableCol6 from '../../Table/Table-col-6';
import TableCol7 from '../../Table/Table-col-7';
import Class from './Class';


class Student extends Component {
    render() {
        return (
            <Router>
                <div className="student container">
                    <ClassTop />
                    <br />
                    <ClassList />
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                        <Row>
                            <Col sm={3}>
                                <ListGroup>
                                    <ListGroup.Item action href="/">
                                        학습 목차
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="">
                                        수강생 관리
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="/">
                                        과제 관리
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={9}>
                                <div>
                                <div className = "paging_bottom_bar_1">
                                    <th> 수강생 대기 목록</th>
                                </div>
                                    <TableCol6 id="studentTable"
                                        title1="#"
                                        title2="전공"
                                        title3="학번"
                                        title4="이름"
                                        title5="연락처"
                                        title6="이메일"
                                        title7="상태"
                                        data={myDoneProblem}
                                    >
                                    </TableCol6>

                                    <div className = "paging_bottom_bar_2">
                                    <th> 수강생 완료 목록</th>
                                    </div>

                                    <TableCol7 id="SuccessTable"
                                    title1="#"
                                    title2="전공"
                                    title3="학번"
                                    title4="이름"
                                    title5="연락처"
                                    title6="이메일"
                                    title7="비고"
                                    data={myDoneProblem}
                                >
                                </TableCol7>
                                </div>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Router>
        )
    };
}
export default Student;

var myDoneProblem = [
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

    {
        index: '7',
        major: '컴퓨터공학',
        studentID: '2018120203',
        name: '김동효',
        number: '010-8849-7802',
        email: 'donghyo@dongguk.edu',

    },
    {
        index: '8',
        major: '컴퓨터공학',
        studentID: '2018120203',
        name: '김동효',
        number: '010-8849-7802',
        email: 'donghyo@dongguk.edu',

    },

    {
        index: '9',
        major: '컴퓨터공학',
        studentID: '2018120203',
        name: '김동효',
        number: '010-8849-7802',
        email: 'donghyo@dongguk.edu',

    },

    {
        index: '10',
        major: '컴퓨터공학',
        studentID: '2018120203',
        name: '김동효',
        number: '010-8849-7802',
        email: 'donghyo@dongguk.edu',

    }

    
];
