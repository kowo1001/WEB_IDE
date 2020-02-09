import React, { Component } from 'react'
export default class Community extends Component {

    render() {
        return (
            <div className = "community">         
                <table className="table table-bordered table-hover tb-community">
                    <thead>
                        <tr>
                            <th></th>
                            <th>1주차<br/>2020-03-02~2020-03-08:</th>
                            <th>2주차<br/>2020-03-09~2020-03-15:</th>
                            <th>3주차<br/>2020-03-16~2020-03-22:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>과제 제출/미제출</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>질의 응답</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>학습 자료실</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
