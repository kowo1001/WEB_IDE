import React from 'react';
import './Header.css'
import { 
        Nav,
        Navbar,
        Button,
        Row,
        Col,
        Container
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
// const MenuLink = (({label, to, activiOnlyWhenExact}) =>{
//     return (
//         <Route path = {to} exact = {activiOnlyWhenExact} children ={({match})=>{
//             var active = match ? 'activi' : '';
//             return (
//                 <li className = {`my-li ${active}`}>
//                     <Link    to = {to} className = "my-link">
//                         {label}
//                     </Link>
//                 </li>
//             )
//         }}>

//         </Route>
//     )
// }) 
// const MenuLink = ({
//     label, // nội dung trong thẻ
//     to, // giống như href trong thẻ a
//     activeOnlyWhenExact
// }) => {
//     return (
//         <Route 
//             path={to}
//             exact={activeOnlyWhenExact}
//             children={ ({ match }) => { //match la doi tuong xac dinh su trung khop cua URL
//                 var active = match ? 'active abc' : '';

//                 return (
//                     <li className={`my-li ${active}`}>
//                         <Link  to={to} className="my-link">{label}</Link>
//                     </li>
//                 );
//             }}
//         />
//     );
// }
class Header extends React.Component {
    render() {
      return (
      <Navbar className = "header">
        <Navbar className = "container-fluid">
            <Row className = "header-content">
                <Col xs xl lg sm md="2">
                     <div className = "logo">
                            <img
                                    width = {100}
                                    height = {100}
                                    src="./img/logo.jpg"
                                    alt="Dongguk logo"
                            />
                    </div>
                </Col>   
                <Col xs xl lg sm md="8">
                    <div className = "sys-name text-center">
                        <h2>Dongguk University Programming Learning Management System</h2>
                    </div>
                </Col>  
                <Col xs xl lg sm md="2">
                    <div className = "log-out">
                        <span>201515 (홍길동)</span> &nbsp;<a href = "#">로그아웃</a>
                    </div>
                </Col> 
            </Row>
            <Row className = "header-bottom">
                <Navbar className="navbar navbar-default">
                        <Container>
                            <Navbar className="navbar-collapse">
                                <ul className="nav navbar-nav header-text">
                                    <Navbar.Brand><Link to="/register">강좌 신청</Link></Navbar.Brand>
                                    <Navbar.Brand><Link to="/template">템플릿</Link></Navbar.Brand>
                                    <Navbar.Brand><Link to="/problems">문제 리스트</Link></Navbar.Brand>
                                    <Navbar.Brand><Link to="/objects">프로젝트 관리</Link></Navbar.Brand>
                                    <Navbar.Brand><Link to="/home">마이페이지</Link></Navbar.Brand>     
                                </ul>
                            </Navbar>
                        </Container>
                    </Navbar>
            </Row>
        </Navbar>
      </Navbar> 
      )
    }
  }
export default Header;
