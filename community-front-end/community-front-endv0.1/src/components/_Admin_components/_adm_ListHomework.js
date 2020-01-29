import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import HomeWork from './_adm_Homework';

class ListHomework extends Component {
  render(){ 
    return(
      <>
        <div>  
            <Link to = "/admin/class/homework/create"><button className = "btn btn-primary pull-right btn-homework-register">과제 등록</button></Link><br/>
        </div>
        <div>
            <HomeWork />
            <HomeWork />
            <HomeWork />
            <HomeWork />
        </div>
      </>
    )
  };
}
export default ListHomework;
