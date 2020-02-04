import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import HomeWork from './_adm_Homework';
import { MdLibraryBooks } from "react-icons/md";
class ListHomework extends Component {
  render(){ 
    return(
      <div className = "homeworks">   
        <h2 className = "mr-bottom-small"><i className = "icon"><MdLibraryBooks /></i>과제 관리</h2>    
        <div className = "text-right">  
            <Link to = "class?p=createhomework" className = "btn btn__primary mr-bottom-small">과제 등록</Link><br/>
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
