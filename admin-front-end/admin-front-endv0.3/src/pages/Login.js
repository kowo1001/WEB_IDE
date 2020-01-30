import React, { Component } from 'react'
import AuthTemplate from '../components/_Author/AuthTemplate'
import LoginForm from '../containers/author/LoginForm'

export default class Login extends Component {
    render() {
        return (
            <div>         
            <AuthTemplate>
                <LoginForm />
            </AuthTemplate>
            </div>
        )
    }
}
