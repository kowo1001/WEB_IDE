import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <div className = "login-form">
                <form action="" method="POST" role="form">
                    <legend><h2>회원가입</h2></legend><br/>
                    <div class="form-group">            
                       <table class="table table-hover register-table"> 
                           <tbody>
                               <tr>
                                   <td width = "20%">아이디</td>
                                   <td width = "80%">
                                   <input type="text" name="id" id="input" class="form-control"/>
                                   </td>
                                </tr>
                                <tr>
                                   <td>이름</td>
                                   <td>
                                    <input type="text" name="major" id="input" class="form-control" />
                                   </td>
                               </tr>
                                <tr>
                                   <td>비밀번호</td>
                                   <td>
                                    <input type="password" name="pwd" id="input" class="form-control" />                                  
                                   </td>
                               </tr>
                               <tr>
                                   <td>이메일</td>
                                   <td>
                                    <div className = "email">
                                        <input type="email" name="" id="input" class="form-control email-text" />
                                        <select name="" id="index-email" class="form-control email-select">
                                            <option value="">@gmail.com</option>
                                            <option value="">@dongguk.edu</option>
                                            <option value="">@naver.com</option>
                                        </select>
                                    </div>
                                   </td>
                               </tr>
                               <tr>
                                   <td>전공</td>
                                   <td>
                                    <input type="text" name="major" id="input" class="form-control" />
                                   </td>
                               </tr>
                           </tbody>
                       </table>
                    </div><br/>
                    <button type="submit" class="btn-login">회원가입</button>
                </form>
            </div>
        )
    }
}
