import React from 'react';
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import _HeaderTop from './_HeaderTop';
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
      <div className = "container-fluid">
        <_HeaderTop/>
            <div className = "header-bottom">
                <ul className = "menu text-center">
                    <li><Link to="/template">템플릿</Link></li>
                    <li><Link to="/listproblem/list">문제 리스트</Link></li>
                    <li><Link to="/projectmanager">프로젝트 관리</Link></li>
                    <li><Link to="/student/mypage">마이페이지</Link></li>
                </ul>
            </div>
      </div>
      )
    }
  }
export default Header;
