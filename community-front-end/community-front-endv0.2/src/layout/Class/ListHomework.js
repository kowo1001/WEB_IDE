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
        <div className =  "list_homework u-mr-top-small">
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
