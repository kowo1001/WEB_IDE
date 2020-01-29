import React from 'react';
import {Link} from "react-router-dom";


const HomeOption = () => {
    return (
    <div className = "home-option-select">
        <ul>
          <li><Link to="/student/home">개설 강좌 목록</Link></li>
          <li><Link to="/student/home/register">강좌 신청</Link></li>
        </ul>
    </div>
    );
};
export default HomeOption;
