import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProblemDetails extends Component {
    render() {
        return (
            <div  className = "problem-detail">
                <div className = "problem-name mr-top-small">
                    <span>{this.props.problem_id}. 겜블 게임 구현</span>
                    <Link to = "#"  className = "btn btn__primary" >프로젝트 생성</Link>&nbsp;
                    <Link to = "#"  className = "btn btn__primary" >전 문제</Link>&nbsp;
                    <Link to = "#"  className = "btn btn__primary" >후 문제</Link>
                </div>
                <div className = "problem-content">
                    <div className = "define">
                        <h3>문제</h3>
                        <p>
                        오프라인 상태에서 진행되는 게임이기 때문에 서버는 필요하지 않습니다. 
                        하지만 추후 네트워크 기능을 구현할 것을 대비하여 온라인게임과 비슷한 방향으로 설계할 것입니다. 클라이언트 안에 가상의 서버가 존재한다고 생각하면 됩니다.
                        </p>   
                    </div>    
                    <div className = "problem_input">
                        <h3>입력</h3>
                        <p>
                        - 첫번째 ...<br/>
                        - 둘번째 ...
                        </p>
                    </div>    
                    <div className = "problem_output">
                        <h3>출력</h3>
                        <p>
                        - 첫번째 선수또는 두번째 선수 승리!!!
                        </p>
                    </div>                                           
                    <div className = "problem-example">                   
                        <div className = "col span-1-of-2 example_input">
                            <h3 >입력 예제 1</h3>
                            <textarea className="form-control" rows="5" disabled defaultValue = "입력 값"></textarea>
                        </div>
                        <div className = "col span-1-of-2 example_output">
                            <h3 >출력 예제 1</h3>
                            <textarea className="form-control" rows="5" disabled defaultValue = "출력 값"></textarea>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}
