import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import HomeWork from '../../components/Homework';
import { MdLibraryBooks } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
class ListHomework extends Component {
  render(){ 
    return(
      <div className = "class_homeworks">   
        <h2><i className = "icon"><MdLibraryBooks /></i>과제 관리</h2>    
        <div className = "headding mr-bottom-big">
            <select className = "select-option" required="required">
                <option value="">번호</option>
                <option value="">제목</option>
                <option value="">작성일</option>
            </select>
            <div className = "search__box">
                <input  className = "search__box-text" type="text" placeholder="Search.."></input>
                <button className = "search__box-btn" type="submit"><i class="icon"><FaSearch/></i></button>
            </div>
        </div>
        <div className =  "list__homework">
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
