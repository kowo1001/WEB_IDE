import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Contribution from '../components/Contribution'

export default class Index extends Component {
    defaultRight = () =>{
        return (
            <div className = "menu-right">
                <img src="./images/index.PNG"  className="img-responsive" alt="Image"/>
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
        <div className = "index-page">
            <div className = "index-top">
                <div className="pull-right">
                    <Link to = "/login">로그인</Link>
                    <Link to = "/register">회원가입</Link>
                    <Link to = "/login">Language(언어)</Link>
                    {/* <select name="" id="input" class="form-control" required="required">
                        <option value="">Language(언어)</option>
                        <option value="">English</option>
                        <option value="">한국어</option>
                    </select> */}
                </div>
            </div>
            <div className = "index"> 
                <div className="row">                   
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className = "memu-left">
                            <div className = "top-text">
                                <div class = "index-logo-text">
                                    <Link to = "/"><img src="./images/logo.jpg" className="index-logo" alt="Image"/></Link>
                                    <span>DGU Programming</span><br/>
                                </div><br/><br/>
                                <h2>온라인 환경에서 개발하세요.</h2>
                            </div>
                           
                            <div className = "bottom-text">
                                <h3>DGU IDE는 설치가 필요없는 클라우드 통합 개발환경으로<br/>팀의 개발 효율성을 극대화하는데 도움을 줍니다.</h3>
                            </div>
                        </div><br/>
                        <div className = "btn-contribution pull-left">
                            <Link to = "/contribution" className = "index-contribution">CONTRIBUTION</Link>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        {this.menuRightComponents()}
                    </div>
                    
                </div>
            </div>
        </div>
        )
    }
}
