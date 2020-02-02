import React, { Component } from 'react'
import OptionSelect from '../../../components/Student_components/HomeOption';
import Profile from '../../../components/Profile/Profile';
import TableCol9 from '../../../components/Table/Table-col-9';
import Header from '../../../components/Header/Header';

class ClassRegister extends Component {
    render(){ 
      var myRegisterClass = [
          {
              process : '학사과정',
              unit : '전공',
              subnum : 'CSE7131',
              name: '심화프로그래밍_02',
              subject: '컴퓨터공학',
              score: '3',
              professor: '김가영'
          },
          {
              process : '학사과정',
              unit : '전공',
              subnum : 'CSE6015',
              name: '기초프로그래밍_02',
              subject: '컴퓨터공학',
              score: '3',
              professor: '김경자'
          },
          {
              process : '학사과정',
              unit : '전공',
              subnum : 'CSE6008',
              name: '웹프로그래밍_01',
              subject: '컴퓨터공학',
              score: '3',
              professor: '송양의'
          },
          {
              process : '학사과정',
              unit : '전공',
              subnum : 'CSE1012',
              name: '심화프로그래밍_01',
              subject: '컴퓨터공학',
              score: '3',
              professor: '윤성림'
          },
      ]
      var myListRegisterClass = () => {
          return (
              <TableCol9
                  title1 = "신청"
                  title2 = "교과과정"
                  title3 = "이수구분"
                  title4 = "학수강좌번호"
                  title5 = "교과목명"
                  title6 = "학과"
                  title7 = "학점"
                  title8 = "담당교수"
                  title9 = "강의계획서"
                  data = { myRegisterClass }
              >
              </TableCol9>
          );
        };
  
        var myDoneProblem = [
          {
              process : '학사과정',
              unit : '전공',
              subnum : 'CSE7131',
              name: '심화프로그래밍_02',
              time: '2-3.5',
              lectureroom:'신공학관 6144',
              professor:'김가영'
  
              
          },
          {
              process : '학사과정',
              unit : '전공',
              subnum : 'CSE6015',
              name: '기초프로그래밍_02',
              time: '1-2',
              lectureroom:'신공학관 6119',
              professor:'김경자'
          },
          {
              process : '학사과정',
              unit : '전공',
              subnum : 'CSE6008',
              name: '웹프로그래밍_01',
              time: '6-7.5',
              lectureroom:'신공학관 3183',
              professor:'송양의'
          }
      ]
      var myListDoneProblem = () => {
          return (
              <TableCol9 
              title1 = "삭제"
              title2 = "교과과정"
              title3 = "이수구분"
              title4 = "학수강좌번호"
              title5 = "교과목명"
              title6 = "강의시간"
              title7 = "강의실"
              title8 = "담당교수"
              title9 = "강의계획서"
              data = { myDoneProblem }
              >
              </TableCol9>
          );
        };
  
      return(
        <>
        <Header />
        <Profile />
            <div className = "home-page container">
                <div className = "content-top">
                    <OptionSelect/>
                </div><br/>
                <div className = "container">
                    대학
                    <select className ="custom-select">
                        <option value="1">Boots</option>
                        <option value="2">Shoes</option>
                        <option value="3">Feet</option>
                    </select>
                    학과
                    <select className="custom-select">
                        <option value="1">Boots</option>
                        <option value="2">Shoes</option>
                        <option value="3">Feet</option>
                    </select>
                    <div>
                        <h3>수강신청 : 2020년 1학기</h3>
                            {myListRegisterClass()}
                        <h3>수강신청 목록 </h3>
                            {myListDoneProblem()}
                    </div>
            </div>
        </div>
      </>
      )
    };
  }
  export default ClassRegister;
  