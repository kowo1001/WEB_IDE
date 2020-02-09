import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import HomeWork from '../../components/Homework';
import { MdLibraryBooks } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import SelectSearch from '../../components/SelectSearch';
class ListHomework extends Component {
  render(){ 
    return(
      <div className = "class_homeworks">   
        <h2><i className = "icon"><MdLibraryBooks /></i>과제 관리</h2>    
        <SelectSearch />
        <div className = "u-text-right u-mr-bottom-small">
          <Link className = "btn_classtask" to = "class?p=createhomework" ><i className = "icon"><FaEdit/>&nbsp;</i>과제 등록</Link>
        </div>
        <div className =  "list_homework">
            <HomeWork />
            <HomeWork />
            <HomeWork />
            <HomeWork />
        </div>
      </div>
    )
  };
}
export default ListHomework;
