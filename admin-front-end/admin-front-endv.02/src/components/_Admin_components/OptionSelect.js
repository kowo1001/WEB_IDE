import React from 'react';
import {Link} from "react-router-dom";


const OptionSelect = () => {
    return (
    <div className = "home-option-select">
        <ul>
          <li><Link to="/home">개설 강좌 모록</Link></li>
          <li><Link to="/home/createclass">강좌 인스턴스 개설</Link></li>
        </ul>
    </div>
    );
};



export default OptionSelect;
