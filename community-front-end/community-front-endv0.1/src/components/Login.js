import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div className = "login-form">
                <form action="" method="POST" role="form">
                    <legend><h2>로그인</h2></legend><br/>
                    <br/><br/>
                    <div class="form-group">
                        <div class="wrap-input100" data-validate = "Valid email is required: ex@abc.xyz">
                            <input class="input100" type="text" name="email" placeholder="이메일"/>
                            <span class="focus-input100-1"></span>
						    <span class="focus-input100-2"></span>
                        </div>

                        <div class="wrap-input100" data-validate="Password is required">
                            <input class="input100" type="password" name="pass" placeholder="비밀번호"/>
                            <span class="focus-input100-1"></span>
						    <span class="focus-input100-2"></span>
                        </div>
                    </div><br/><br/>
                    <Link to = "/student/mypage"><button type="submit" class="btn-login">로그인</button></Link>
                </form>
                <div><br/><br/>
                    <p>
                        <Link className = "text-primary">아이디 / 비밀번호 찾기</Link>
                    </p>
                </div>
            </div>
        )
    }
}
