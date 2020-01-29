import React from 'react';

import { 
        Row,
        Col,
        Container
} from 'react-bootstrap';
class Profile extends React.Component {
    render() {
      return (
        <div className = "profile container">
            <div className = "row">
                    <Col xs xl lg sm md="4">
                        <div className = "avatar text-center">
                            <img
                                width = {100}
                                height = {100}
                                src="https://image.flaticon.com/icons/png/512/236/236832.png"
                                alt="Dongguk logo"
                            />
                        </div>
                    </Col>
                    <Col xs xl lg sm md="5">
                        <div className = "main-information">
                            <ul>
                                <li><p><b>이름 :</b> 홍길동</p></li>
                                <li><p><b>학과 :</b> 컴퓨터 공학과</p></li>
                                <li><p><b>학번 :</b> 201454526</p></li>
                                <li><p><b>학년 :</b> 4</p></li>
                                <li><p><b>이메일 :</b> kr@dongguk.du</p></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs xl lg sm md="3">
                        <div className = "something">
                             <p>Something</p> 
                        </div>
                    </Col>
            </div>
        </div>
      )
    }
  }
export default Profile;
