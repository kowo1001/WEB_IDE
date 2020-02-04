import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header/Header'

export default class ProblemDetails extends Component {
    render() {
        return (
            <>
            <Header />
            <div  className = "problem-details container, body-height">
                <ul>
                    <li>01번</li>&nbsp;
                    <li><Link className = "btn btn-primary" >IDE 에디터</Link></li>
                </ul>
                <div className = "problem-content">
                    <h3>하노이 탑</h3>
                    <legend>문제</legend>
                        <div className = "problem-explain">
                        세 개의 장대가 있고 첫 번째 장대에는 반경이 서로 다른 n개의 원판이 쌓여 있다. 각 원판은 반경이 큰 순서대로 쌓여있다. 이제 수도승들이 다음 규칙에 따라 첫 번째 장대에서 세 번째 장대로 옮기려 한다.

                        한 번에 한 개의 원판만을 다른 탑으로 옮길 수 있다.
                        쌓아 놓은 원판은 항상 위의 것이 아래의 것보다 작아야 한다.
                        이 작업을 수행하는데 필요한 이동 순서를 출력하는 프로그램을 작성하라. 단, 이동 횟수는 최소가 되어야 한다.

                        아래 그림은 원판이 5개인 경우의 예시이다.<br/>
                      
                        </div><br/>
                    <legend>입력</legend>
                        <div classname = "problem-inputs">
                        첫째 줄에 첫 번째 장대에 쌓인 원판의 개수 N (1 ≤ N ≤ 100)이 주어진다.
                        </div><br/>
                    <legend>출력</legend>
                        <div classname = "problem-inputs">
                        첫째 줄에 옮긴 횟수 K를 출력한다.N이 20 이하인 입력에 대해서는 두 번째 줄부터 수행 과정을 출력한다. 두 번째 줄부터 K개의 줄에 걸쳐 두 정수 A B를 빈칸을 사이에 두고 출력하는데, 이는 A번째 탑의 가장 위에 있는 원판을 B번째 탑의 가장 위로 옮긴다는 뜻이다. N이 20보다 큰 경우에는 과정은 출력할 필요가 없다.
                        </div><br/>
                    <div className = "problem-example">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 problem-example-text">
                                <legend >입력 예제 1</legend>
                                <textarea className="form-control" rows="3" disabled>3</textarea>
                            </div>  
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 problem-example-text">
                                <legend >출력 예제 1</legend>
                                <textarea className="form-control" rows="3" disabled>7
                                    1 3
                                    1 2
                                    3 2
                                    1 3
                                    2 1
                                    2 3
                                    1 3</textarea>
                            </div>        
                        </div> 
                    </div>                
                </div>
            </div>
        </>
        )
    }
}
