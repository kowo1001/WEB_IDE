import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProblemDetails extends Component {
    render() {
        return (
            <div  className = "problem-detail">
                <div className = "problem-name mr-top-small">
                    <span>{this.props.problem_id}. 하노이 탑</span>
                     <Link to = "#" className = "btn btn__primary" >프로젝트 생성</Link>&nbsp;
                </div>
                <div className = "problem-content">
                    <div className = "define">
                        <h3>문제</h3>
                        <p>
                        세 개의 장대가 있고 첫 번째 장대에는 반경이 서로 다른 n개의 원판이 쌓여 있다. 각 원판은 반경이 큰 순서대로 쌓여있다. 이제 수도승들이 다음 규칙에 따라 첫 번째 장대에서 세 번째 장대로 옮기려 한다.

                        한 번에 한 개의 원판만을 다른 탑으로 옮길 수 있다.
                        쌓아 놓은 원판은 항상 위의 것이 아래의 것보다 작아야 한다.
                        이 작업을 수행하는데 필요한 이동 순서를 출력하는 프로그램을 작성하라. 단, 이동 횟수는 최소가 되어야 한다.

                        아래 그림은 원판이 5개인 경우의 예시이다.
                        </p>   
                    </div>    
                    <div className = "problem_input">
                        <h3>입력</h3>
                        <p>
                        - 첫째 줄에 첫 번째 장대에 쌓인 원판의 개수 N (1 ≤ N ≤ 100)이 주어진다.<br/>
                        </p>
                    </div>    
                    <div className = "problem_output">
                        <h3>출력</h3>
                        <p>
                        - 첫째 줄에 옮긴 횟수 K를 출력한다.N이 20 이하인 입력에 대해서는 두 번째 줄부터 수행 과정을 출력한다. 두 번째 줄부터 K개의 줄에 걸쳐 두 정수 A B를 빈칸을 사이에 두고 출력하는데, 이는 A번째 탑의 가장 위에 있는 원판을 B번째 탑의 가장 위로 옮긴다는 뜻이다. N이 20보다 큰 경우에는 과정은 출력할 필요가 없다.
                        </p>
                    </div>                                           
                    <div className = "problem-example">                   
                        <div className = "col span-1-of-2 example_input">
                            <h3 >입력 예제 1</h3>

                        </div>
                        <div className = "col span-1-of-2 example_output">
                            <h3 >출력 예제 1</h3>

                        </div>
                    </div>
                    <div className = "problem-example">                   
                        <div className = "col span-1-of-2 example_input">
                            <textarea className="form-control" rows="10" cols="70" disabled defaultValue = "입력값"></textarea>
                        </div>
                        <div className = "col span-1-of-2 example_output">
                            <textarea className="form-control" rows="10" cols="70" disabled defaultValue = "출력값">
                            </textarea>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}
