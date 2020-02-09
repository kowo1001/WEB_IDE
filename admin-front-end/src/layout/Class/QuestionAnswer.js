import React, { Component } from 'react'
import { FaSearch,FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GoFilePdf } from 'react-icons/go'
import CKEditor from 'ckeditor4-react';
import SelectSearch from '../../components/SelectSearch';
import ClassViewTable from '../../components/ClassViewTable';
import ClassViewItem from '../../components/ClassViewItem';
import FormWriteClass from '../../components/FormWriteClass';
function QuestionAnswer(props) {
  return (
    <div className="class_qa">
      <h2>
        <i class="icon"> </i>질의 응답
      </h2>
      <div className="headding">
          <SelectSearch />
          <Link className = "btn_write u-mr-bottom-small" to = "#" onClick = {()=> this.writeNotice()}><i className = "icon"><FaEdit/></i>글쓰기</Link>
      </div>
      <div className="qa_content u-mr-bottom-small">
          <ClassViewTable />
      </div>
      <div className="qa_content-view u-mr-bottom-small">
          <ClassViewItem />
      </div>

      <div className = "qa_content-write">
                    <FormWriteClass
                        title = "질의 응답 작성"
                        btnName = "질의 응답 등록"
                    />
      </div>
    </div>
  );
}
export default QuestionAnswer;
