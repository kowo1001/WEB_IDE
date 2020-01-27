import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import HomeWork from './HomeWork';

class HomeworkList extends Component {
  render(){ 
    return(
      <>
        <div>  
            <button className = "btn btn-primary pull-right btn-homework-register"><Link to="/class/createhomework">과제 등록 </Link></button><br/>
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
export default HomeworkList;
