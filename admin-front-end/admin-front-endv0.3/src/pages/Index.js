import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Contribution from '../components/Contribution'

export default class Index extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    defaultRight = () =>{
        return (
            <div className = "right-box">
                <img src="./images/index.PNG"  className="right-image" alt="Image"/>
            </div>
        )
    }
    menuRightComponents = () => {
        var slug = this.props.match.params.slug;
        switch (slug) {
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
            <div className = "main__header">
               <ul className = "main__header-nav ul-nolist-inline">
                    <li><Link to = "/login.html">로그인</Link></li>
                    <li><Link to = "/register.html">회원가입</Link></li>
                    <li><Link to = "/login.html">Language(언어)</Link></li>
                </ul>
            </div>
            <div className = "main__bottom"> 
                <div className="col span-1-of-2 main__bottom-left">
                        <div className = "logo_text">
                            <Link to = "/"><img src="./images/logo.jpg" className="logo" alt="Main logo"/></Link>
                            <span>DGU Programming</span>
                        </div>
                            <h2>온라인 환경에서 개발하세요.</h2>
                            <h3>DGU IDE는 설치가 필요없는 클라우드 통합 개발환경으로 팀의 개발 효율성을 극대화하는데 도움을 줍니다.</h3>
                        <div className = "contribution-box mr-top-small">
                            <Link to = "/contribution.html" className = "btn btn__contribution">CONTRIBUTION</Link>
                        </div>
                </div>
                <div className="col span-1-of-2 main__bottom-right">
                    {this.menuRightComponents()}
                </div>
            </div>
        </div>
        )
    }
}
