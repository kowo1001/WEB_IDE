import React, { Component } from 'react'
import { FaSearch,FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GoFilePdf } from 'react-icons/go'
import CKEditor from 'ckeditor4-react';
import SelectSearch from '../../components/SelectSearch';
import FormWriteClass from '../../components/FormWriteClass';
import ClassViewTable from '../../components/ClassViewTable';
import ClassViewItem from '../../components/ClassViewItem';
export default class ClassDocument extends Component {
  
    render() {
        var listDocuments = [
            {
                "index" : 1,
                "title" : "1주차 과제 파일 추가",
                "week" : 1,
                "file" : "week_1.pdf",
                "author" : "홍길동",
                "date" : "2020.03.20",
                "view" : 20,
            },
            {
                "index" : 2,
                "title" : "2주차 과제 파일 추가",
                "week" : 2,
                "file" : "week_2.pdf",
                "author" : "홍길동",
                "date" : "2020.03.20",
                "view" : 20,
            },
            {
                "index" : 3,
                "title" : "3주차 과제 파일 추가",
                "week" : 3,
                "file" : "week_2.pdf",
                "author" : "홍길동",
                "date" : "2020.03.20",
                "view" : 20,
            },
            {
                "index" : 4,
                "title" : "4주차 과제 파일 추가",
                "week" : 4,
                "file" : "week_4.pdf",
                "author" : "홍길동",
                "date" : "2020.03.20",
                "view" : 20,
            },

        ]
        return (
            <div className = "class_resources">
                <h2><i class = "icon"> </i>학습 자료실</h2>
                <div className = "headding">
                    <SelectSearch />
                </div>
                <div  className = "resources_list u-mr-top-small">
                   <ClassViewTable />
                </div>
                <div  className = "resources_view u-mr-top-small">
                   <ClassViewItem />
                </div>
            </div>
        )
    }
}
