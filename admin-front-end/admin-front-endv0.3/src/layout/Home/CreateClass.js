import React, { Component } from 'react'
import { MdSpeakerNotes } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default class CreateClass extends Component {

    openClassSubmit = (event) => {
        alert("강좌 생성 되었습니다");
        event.preventDefault();
    }
    render() {
        var listMyClass = [
            {
                "major" : "컴퓨터 공학과",
                "bachelor" : "학사과정",
                "type" : "전공",
                "class_id" : "CSI201601",
                "class_name" : "형식언어",
                "class_num" : 3,
                "grade" : 3,
                "syllabus" : "syllabus.pdf",
            },
            {
                "major" : "컴퓨터 공학과",
                "bachelor" : "학사과정",
                "type" : "전공",
                "class_id" : "CSI201602",
                "class_name" : "기업사회맞춤형프로젝트",
                "class_num" : 2,
                "grade" : 3,
                "syllabus" : "syllabus.pdf",
            },
            {
                "major" : "컴퓨터 공학과",
                "bachelor" : "학사과정",
                "type" : "전공",
                "class_id" : "CSI201601",
                "class_name" : "기업사회맞춤형프로젝트2",
                "class_num" : 3,
                "grade" : 3,
                "syllabus" : "syllabus.pdf",
            },
            {
                "major" : "컴퓨터 공학과",
                "bachelor" : "학사과정",
                "type" : "대학원 전공",
                "class_id" : "CSI201601",
                "class_name" : "Secure coding",
                "class_num" : 3,
                "grade" : 3,
                "syllabus" : "syllabus.pdf",
            },
        ]
        var listMyOpenedClass = [
            {
                "major" : "컴퓨터 공학과",
                "bachelor" : "학사과정",
                "type" : "전공",
                "class_id" : "CSI201602",
                "class_name" : "공개SW프로젝트",
                "class_num" : 3,
                "grade" : 3,
                "syllabus" : "syllabus.pdf",
            }
        ]
        return (
            <div className = "open_class">  
                <div className = "classs">
                    <h2><i class = "icon"> <MdSpeakerNotes /></i>강좌 인스턴스 생성</h2>
                    <table class="table table-contribution" border = "1">
                        <thead>
                            <tr>
                                <th width = "10%">학과</th>
                                <th width = "10%">교과 과정</th>
                                <th width = "10%">이수구분</th>
                                <th width = "10%">강좌번호</th>
                                <th width = "15%">교과목명</th>
                                <th width = "5%">분반</th>
                                <th width = "5%">학점</th>
                                <th width = "10%">강의계획서</th>
                                <th width = "5%">강좌 생성</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listMyClass.map((item,index) => {
                                    return (
                                        <tr key={`row-${index}`}>
                                            <td>{item.major}</td>
                                            <td>{item.bachelor}</td>
                                            <td>{item.type}</td>
                                            <td>{item.class_id}</td>
                                            <td>{item.class_name}</td>
                                            <td>{item.class_num}</td>
                                            <td>{item.grade}</td>
                                            <td>{item.syllabus}</td>
                                            <td><Link to = "#" className = "btn__permission" onClick = { (event) => {this.openClassSubmit(event)}}>생성</Link></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className = "opened_classs mr-top-small">
                    <h2><i class = "icon"> <MdSpeakerNotes /></i>강좌 인스턴스 생성</h2>
                    <table class="table table-contribution" border = "1">
                        <thead>
                            <tr>
                                <th width = "10%">학과</th>
                                <th width = "10%">교과 과정</th>
                                <th width = "10%">이수구분</th>
                                <th width = "10%">강좌번호</th>
                                <th width = "15%">교과목명</th>
                                <th width = "5%">분반</th>
                                <th width = "5%">학점</th>
                                <th width = "10%">강의계획서</th>
                                <th width = "5%">강좌 생성</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listMyOpenedClass.map((item,index) => {
                                    return (
                                        <tr>
                                            <td>{item.major}</td>
                                            <td>{item.bachelor}</td>
                                            <td>{item.type}</td>
                                            <td>{item.class_id}</td>
                                            <td>{item.class_name}</td>
                                            <td>{item.class_num}</td>
                                            <td>{item.grade}</td>
                                            <td>{item.syllabus}</td>
                                            <td><Link to = "#" className = "btn__permission" onClick = { (event) => {this.openClassSubmit(event)}}>삭제</Link></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
