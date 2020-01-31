import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Contribution extends Component {
    render() {
        return (
            <div className = "contribution">
                <table className="table table-bordered list-contribution">
                <thead>
                    <tr>
                        <th>프로젝트 기간</th>
                        <th>개발 내용</th>
                        <th>참여 인원</th>
                        <th>기여도</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2018.03 - 2018.12</td>
                        <td>도커 기반 동국대 앱 IDE Core 개발</td>
                        <td>이준영, 양승영, 양시연</td>
                        <td>....</td>
                    </tr>
                    <tr>
                        <td>2019.03 - 2019.06</td>
                        <td>사용자 인터페이스(UI) 설계 및 개발</td>
                        <td>김민성, 구미송, 심나영, 장효정</td>
                        <td>
                            <p>김민성: 백엔드 전반 구현</p>
                            <p>구미성: 기존 프로젝트 분석 및 서버 관리</p>
                            <p>심나영: UI 및 디자인 등 프로젝트 구현</p>
                            <p>장효정: 기능 등 설계서 작성 및 DB 구현</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
          
        )
    }
}
