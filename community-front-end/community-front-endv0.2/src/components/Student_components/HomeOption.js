import React from 'react';
import {Link} from "react-router-dom";
import Button from '../Button';


const HomeOption = () => {
    return (
    <div className = "home-option-select">
        <ul>
          <Button color="orange" size="large"><Link to="/student">개설 강좌 목록</Link></Button>
          <Button color="yellow" size="large"><Link to="/student/home/register">강좌 신청</Link></Button>
        </ul>
    </div>
    );
};
export default HomeOption;
