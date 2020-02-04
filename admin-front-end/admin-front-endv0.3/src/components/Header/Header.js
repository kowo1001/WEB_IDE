import React from 'react';
import { FaAlignRight } from "react-icons/fa";
import {NavLink} from "react-router-dom";
// const MenuLink = (({label, to, activiOnlyWhenExact}) =>{
//     return (
//         <Route path = {to} exact = {activiOnlyWhenExact} children ={({match})=>{
//             var active = match ? 'activi' : '';
//             return (
//                 <li className = {`my-li ${active}`}>
//                     <NavLink    to = {to} className = "my-link">
//                         {label}
//                     </NavLink>
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
//                         <NavLink  to={to} className="my-link">{label}</NavLink>
//                     </li>
//                 );
//             }}
//         />
//     );
// }

/*
- Setup responsive
*/
class Header extends React.Component {
    state = {
        isOpen:false
    };
    handleToggle = () => {
        this.setState({ isOpen : !this.state.isOpen});
    }

    render() {
      return (
      <div className = "header">
             <div className="header__top">
                <div className = "header__top_logo-box">
                        <img
                                src= "./images/logo.jpg"
                                alt="Dongguk logo"
                        />
                </div>
                <div className = "header__top_text-box">
                    <h1>DGU IDE</h1>
                </div>
                <div className= "header__top_user-box">
                        <span>201515 (홍길동)</span> &nbsp;<NavLink to = "#">로그아웃</NavLink>
                </div>
            </div>
            <div className = "header__bottom">
                <div className = "row">
                    <ul className = "header__bottom-nav ul-nolist-inline">
                        <li><NavLink to="/template">학습 관리</NavLink></li>
                        <li><NavLink to="/listproblem">문제 리스트</NavLink></li>
                        <li><NavLink to="/projectmanager">프로젝트 관리</NavLink></li>
                        <li><NavLink activeClassName = "nav-selected" to="/admin">마이페이지</NavLink></li>
                    </ul>
                </div>
            </div>
      </div>
      )
    }
  }
export default Header;
