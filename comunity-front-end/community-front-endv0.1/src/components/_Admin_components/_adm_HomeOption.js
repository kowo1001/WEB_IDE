import React from 'react';
import {Link} from "react-router-dom";


const HomeOption = () => {
    return (
    <div className = "home-option-select">
        <ul>
          <li><Link to="/admin">개설 강좌 목록</Link></li>
          <li><Link to="/admin/home/createclass">강좌 인스턴스 개설</Link></li>
        </ul>
    </div>
    );
};



export default HomeOption;
