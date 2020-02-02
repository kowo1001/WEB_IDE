import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class ProblemDetails extends Component {
    render() {
        return (
            <div  className = "problem-details container">
                <ul>
                    <li><Link className = "btn btn-primary" >01번</Link></li>&nbsp;
                    <li><Link className = "" >프로젝트 생성</Link></li>
                </ul>
                <div className = "problem-content">
                    <h3>겜블 게임 구현</h3>
                    <legend>문제</legend>
                        <div className = "problem-explain">
                            - Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
                            - Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.<br/>
                        </div><br/>
                    <legend>입력</legend>
                        <div classname = "problem-inputs">
                        - 첫번째 ...
                        - 둘번째 ...
                        </div><br/>
                    <legend>출력</legend>
                        <div classname = "problem-inputs">
                        - 첫번째 선수또는 두번째 선수 승리!!!
                        </div><br/>
                    <div className = "problem-example">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 problem-example-text">
                                <legend >입력 예제 1</legend>
                                <textarea className="form-control" rows="3" disabled>입력 값</textarea>
                            </div>  
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 problem-example-text">
                                <legend >출력 예제 1</legend>
                                <textarea className="form-control" rows="3" disabled>출력 값</textarea>
                            </div>        
                        </div> 
                    </div>                
                </div>
            </div>
        )
    }
}
