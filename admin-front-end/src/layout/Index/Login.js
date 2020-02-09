import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from "axios"

export default class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isAccount : false,
            email: "", password: ""
        }
    }
    
    input = (event) => {
        const { name, value } = event.target;
        const state = {}; state[name] = value;
        this.setState(state)
    }
    
    checkAccount = (event) => {
        event.preventDefault();

        if(this.state.email == "admin" && this.state.password == "test")
        {
            this.setState({
                isAccount : !this.state.isAccount
            })
        }
    }
    
    async submitHandler(event) {
        const { email, password } = this.state;
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password });
            // get 
        } catch(e) {
            console.log(e);
            alert("서버 통신 오류!")
        }
    }

    render() {
        if(this.state.isAccount)
         {
            return <Redirect to = "/admin" />;
         }
            return (
                <div className = "login-form">
                    <form>
                        <legend><h2>로그인</h2></legend><br/>
                        <br/><br/>
                        <div className="form-group">
                            <div className="wrap-input100" data-validate = "Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" onChange = {(event) => (this.input(event))} name="email" placeholder="이메일"/>
                                <span className="focus-input100-1"></span>
                                <span className="focus-input100-2"></span>
                            </div>

                            <div className="wrap-input100" data-validate="Password is required">
                                <input className="input100" type="password" onChange = {(event) => (this.input(event))} name="pass" placeholder="비밀번호"/>
                                <span className="focus-input100-1"></span>
                                <span className="focus-input100-2"></span>
                            </div>
                        </div><br/><br/>
                        <button type="button" onClick = {(event) => (this.submitHandler(event))} className="btn-login btn-shadow">로그인</button> 
                    </form>
                    <div>
                        <ul>
                            <Link to = "#" className = "text text_primary">아이디</Link>
                            <Link to = "#" className = "text text_primary"> / 비밀번호 <span>찾기</span></Link>
                        </ul>
                    </div>
                </div>
            )
         
    }
}
