import React, { Component } from 'react'
import HwSubmission from '../../components/HwSubmission'
import { MdAssignment } from "react-icons/md";
export default class Community extends Component {
    render() {
        return (
            <div className = "community">   
                <h2 className = "mr-bottom-small"><i className = "icon"><MdAssignment /></i>학습 목차</h2>      
                <table className="table table-contribution" border = "1">
                    <thead>
                        <tr>
                            <th width = "15%">#</th>
                            <th>1주차<br/>2019-03-03~2019-03-03:</th>
                            <th>2주차<br/>2019-03-03~2019-03-03:</th>
                            <th>3주차<br/>2019-03-03~2019-03-03:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>과제 제출/미제출</td>
                            <td><HwSubmission state = "submission" /></td>
                            <td><HwSubmission state = "not_submission" /></td>
                            <td><HwSubmission state = "submission"/></td>
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
