import React from 'react';
import Button from './Button';

class Profile extends React.Component {
    render() {
      return (
        <div className = "profile">
            <div className = "row">
                <div className = "col span-1-of-2 profile_left">
                    <img
                        className = "profile_left-logo"
                        src="https://nimael.com/wp-content/uploads/2017/07/student.png"
                        alt="Dongguk logo"
                    /> 
                </div>
                <div className = "col span-1-of-2 profile_right">
                        <ul className = "ul-nolist-inline">
                            <li><b>이름 :</b> 홍길동</li>
                            <li><b>학과 :</b> 컴퓨터 공학과</li>
                            <li><b>학번 :</b> 201454526</li>
                            <li><b>학년 :</b> 4</li>
                            <li><b>이메일 :</b> kr@dongguk.du</li>
                        </ul>
                        <div className = "profile_right_works">
                            <Button size="large" color="orange">수정</Button>
                        </div>  
                </div>
            </div>
        </div>
      )
    }
  }
export default Profile;
