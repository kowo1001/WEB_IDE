import React, { Component } from 'react'
import { MdSpeakerNotes } from 'react-icons/md'
import { Link } from 'react-router-dom'
function CreateClassTable(props) {
    var listMyClass = [
        {
            "major" : "컴퓨터 공학과",
            "bachelor" : "학사과정",
            "type" : "전공필수(전필)",
            "class_name" : "형식언어",
            "class_num" : 3,

        },
        {
            "major" : "컴퓨터 공학과",
            "bachelor" : "학사과정",
            "type" : "전공선택(전선)",
            "class_name" : "기업사회맞춤형프로젝트",
            "class_num" : 2,

        },
        {
            "major" : "컴퓨터 공학과",
            "bachelor" : "학사과정",
            "type" : "전공선택(전선)",
            "class_name" : "기업사회맞춤형프로젝트2",
            "class_num" : 3,

        },
        {
            "major" : "컴퓨터 공학과",
            "bachelor" : "석사과정",
            "type" : "전공필수(전필)",
            "class_name" : "시큐어 코딩",
            "class_num" : 3,

        },
    ]
    return (
        <table class="table table-contribution" border = "1">
        <thead>
            <tr>
                <th width = "10%">학과</th>
                <th width = "10%">교과 과정</th>
                <th width = "10%">이수구분</th>
                <th width = "15%">교과목명</th>
                <th width = "5%">분반</th>
                <th width = "6%">비고</th>
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
                            <td>{item.class_name}</td>
                            <td>{item.class_num}</td>
                            <td className = "open_td"><Link to = "#" className = {`btn ${props.btnClass}`} onClick = { (event) => {this.openClassSubmit(event)}}>{props.btnName}</Link></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )
}
export default class CreateClass extends Component {

    openClassSubmit = (event) => {
        alert("강좌 생성 되었습니다");
        event.preventDefault();
    }
    render() {
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
                <div className = "classs u-mr-top-small">
                    <h2><i class = "icon"> <MdSpeakerNotes /></i>강좌 개설</h2>
                    <CreateClassTable 
                            btnName = "생성"
                            btnClass = "btn_permission"
                        />
                </div>
                <div className = "opened_classs u-mr-top-big">
                    <h2><i class = "icon"> <MdSpeakerNotes /></i>강좌 개설 취소</h2>
                    <CreateClassTable 
                            btnName = "취소"
                            btnClass = "btn_refuse"
                        />
                </div>
            </div>
        )
    }
}
