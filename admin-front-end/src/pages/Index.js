import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from '../layout/Index/Login'
import Register from '../layout/Index/Register'
import Contribution from '../components/Contribution'

export default class Index extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    defaultRight = () =>{
        return (
            <div className = "right-box composition">
                <img src="./images/index.PNG"  className="right-image composition__photo composition__photo_1" alt="photo1"/>
                <img src="./images/index.PNG"  className="right-image composition__photo composition__photo_2" alt="photo1"/>
                <img src="./images/index.PNG"  className="right-image composition__photo composition__photo_3" alt="photo1"/>
            </div>
        )
    }
    menuRightComponents = () => {
        var path = this.props.location.search;
        path = path.substring(3,path.length);
        switch (path) {
            case "contribution":
                return <Contribution />;
            case "login":
                return <Login />;
            case "register":
                return <Register />;
            default:
                return this.defaultRight(); 
        }
    }
    render() {
        return (
        <div className = "main">
            <div className = "main_header">
               <ul className = "ul-nolist-inline">
                    <li><Link to = "/index?p=login">로그인</Link></li>
                    <li><Link to = "/index?p=register">회원가입</Link></li>
                    <li><Link to = "/index?p=contribution">Contribution</Link></li>
                </ul>
            </div>
            <div className = "main_bottom"> 
                <div className="col span-1-of-2 main_bottom-left">
                        <div className = "logo_text">
                            <Link to = "/index"><img src="./images/logo.jpg" className="logo" alt="Main logo"/></Link>
                            <span>DGU Programming</span>
                        </div>
                            <h2>온라인 환경에서 개발하세요.</h2>
                        <div className = "contribution-box u-mr-top-small">
                            {/* <Link to = "/index?p=contribution" className = "btn btn_contribution">CONTRIBUTION</Link> */}
                        </div>
                </div>
                <div className="col span-1-of-2 main_bottom-right">
                    {this.menuRightComponents()}
                </div>
            </div>
        </div>
        )
    }
}
