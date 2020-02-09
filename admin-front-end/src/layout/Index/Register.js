import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <div className = "login-form">
                <form action="" method="POST" role="form">
                    <legend><h2>회원가입</h2></legend><br/>
                    <div className="form-group">            
                       <table className="register-table"> 
                           <tbody>
                               <tr>
                                   <td width = "20%">학번</td>
                                   <td width = "80%">
                                   <input type="text" name="id" id="input" placeholder = "학번" />
                                   </td>
                                </tr>
                                <tr>
                                   <td>이름</td>
                                   <td>
                                    <input type="text" name="major" id="input" placeholder = "이름"  />
                                   </td>
                               </tr>
                                <tr>
                                   <td>비밀번호</td>
                                   <td>
                                    <input type="password" name="pwd" id="input" placeholder = "비밀번호" />                                  
                                   </td>
                               </tr>
                               <tr>
                                   <td>이메일</td>
                                   <td>
                                    <div className = "email">
                                        <input type="email" name="" id="input" placeholder = "이메일"/>
                                            <select className = "u-border-null u-outline-null" name="" id="index-email">
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
                                    <input type="text" name="major" id="input" placeholder = "전공" />
                                   </td>
                               </tr>
                           </tbody>
                       </table>
                    </div><br/>
                    <button type="submit" className="btn-login">회원가입</button>
                </form>
            </div>
        )
    }
}
