import React, { Component } from 'react';
import TableCol6 from '../Table/Table-col-6';
import TableCol7 from '../Table/Table-col-7';
import { FaRegListAlt } from "react-icons/fa";


class ControlClassRegister extends Component {
    
    render() {
        var  listStudent = [
            {
                index: '1',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
            {
                index: '2',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
            {
                index: '3',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
        
            {
                index: '4',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
        
            {
                index: '5',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
        
            {
                index: '6',
                major: '컴퓨터공학',
                studentID: '2018120203',
                name: '김동효',
                number: '010-8849-7802',
                email: 'donghyo@dongguk.edu',
        
            },
        ];
        return (
            <>
                <div className="student">
                        <div className = "paging_bottom_bar_1">
                            <h3><b><FaRegListAlt/> &nbsp;수강생 대기 목록</b></h3>
                        </div>
                        <div className = "list-waiting">
                            <TableCol6 id="studentTable"
                                title1="#"
                                title2="전공"
                                title3="학번"
                                title4="이름"
                                title5="연락처"
                                title6="이메일"
                                title7="상태"
                                data={listStudent}
                            >
                            </TableCol6>
                        </div>
                        <div className = "paging_bottom_bar_2">
                            <h3><b><FaRegListAlt/> &nbsp;수강생 완료 목록</b></h3>
                        </div>
                        <div className = "list-register">
                            <TableCol7 id="SuccessTable"
                            title1="#"
                            title2="전공"
                            title3="학번"
                            title4="이름"
                            title5="연락처"
                            title6="이메일"
                            title7="비고"
                            data={listStudent}
                        >
                            </TableCol7>
                        </div>
                </div>
            </>
        )
    };
}
export default ControlClassRegister;


