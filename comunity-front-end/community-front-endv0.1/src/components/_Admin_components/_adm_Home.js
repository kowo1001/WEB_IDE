import React, { Component } from 'react';
import { 
  Container
} from 'react-bootstrap';
import TableCol4 from '../Table/Table-col-4';

class HomeView extends Component {
  render(){ 
    var myRegisterClass = [
        {
            id : 1,
            name : '심화프로그래밍_01',
            unit : 'CSE1012',
            professor : '김가영'
        },
        {
            id : 2,
            name : '기초프로그래밍_02',
            unit : 'CSE1013',
            professor : '김가영'
        },
        {
            id : 3,
            name : '자료구죠_03',
            unit : 'CSE1011',
            professor : '김가영'
        },
        {
            id : 4,
            name : '웹프로그래밍_03',
            unit : 'CSE1010',
            professor : '김가영'
        },
    ]
    var myListRegisterClass = () => {
        return (
            <TableCol4 
                title1 = "과목명"
                title2 = "과목 코드"
                title3 = "담당 교수"
                title4 = "강의실 입장"
                data = { myRegisterClass }
            >
            </TableCol4>
        );
      };

      var myDoneProblem = [
        {
            order : 1,
            id : 123,
            date : '2020.02.26(토요일)',
            description : '벌찍기 프로그램.....',
        },
        {
            order : 2,
            id : 33,
            date : '2020.02.27(일요일)',
            description : '벌찍기 프로그램.....',
        },
        {
            order : 3,
            id : 134,
            date : '2020.02.28(화요일)',
            description : '벌찍기 프로그램.....',
        }
    ]
    var myListDoneProblem = () => {
        return (
            <TableCol4 
            title1 = "ID"
            title2 = "완료 날짜"
            title3 = "문제"
            title4 = "IDE 가기"
            data = { myDoneProblem }
            >
            </TableCol4>
        );
      };
      var myListDoingProblem = () => {
        return (
            <TableCol4 
            title1 = "ID"
            title2 = "미지작 날짜"
            title3 = "문제"
            title4 = "IDE 가기"
            data = { myDoneProblem }
            >
            </TableCol4>
        );
      };

    return(
      <div>
            <Container>
                <h3>학기정보 : 2020년 1학기</h3>
                    {myListRegisterClass()}
                <h2>해결된 문제 </h2>
                    {myListDoneProblem()}
                <h3>해결중인 문제 </h3>
                    {myListDoingProblem()}
            </Container>
      </div>
    )
  };
}
export default HomeView;
