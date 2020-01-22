import React from 'react';
import './Profile.css';

import { 
        Row,
        Col,
        Container
} from 'react-bootstrap';
class Profile extends React.Component {
    render() {
      return (
        <div className = "profile container">
                <Row>
                    <Col xs xl lg sm md="3">
                        <div className = "avatar justify-content-center">
                            <img
                                width = {100}
                                height = {100}
                                src="https://image.flaticon.com/icons/png/512/236/236832.png"
                                alt="Dongguk logo"
                            />
                        </div>
                    </Col>
                    <Col xs xl lg sm md="6">
                        <div className = "main-information">
                            <table className="table profile-table">
                                <tr>
                                    <th >이름 : 홍길동 </th>
                                    <th >학과 : 컴퓨터 공학과 </th>
                                </tr>
                                <tr>
                                    <th >학번 : 2020326  </th>
                                    <th >학년 : 3 </th>
                                </tr>
                                <tr>
                                    <th >이메일 : kr@dongguk.du  </th>
                                    <th ></th>
                                </tr>
                                <tr>
                                <th >사무실 : 신공학과 10층 1015호   </th>
                                <th ></th>
                                </tr>
                            </table>

                        </div>
                    </Col>
                    <Col xs xl lg sm md="3">
                    </Col>
                </Row>
        </div>
      )
    }
  }
export default Profile;
