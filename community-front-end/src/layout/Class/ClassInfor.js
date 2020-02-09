import React from 'react';
const ClassInfor = () => {
    return (
        <div className="class__info">
            <div className = "row">
                <div className = "class__info-name">
                    <h1>심화 프로그래밍_01</h1>
                </div>
                <div className = "class__info-details">
                    <div className = "col span-1-of-2">
                        <table className = "table" border = "1">
                            <thead>
                                <tr>
                                    <th>이수구분</th>
                                    <th>학점</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>전공</td>
                                    <td>3.0 학점</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className = "col span-1-of-2">
                        <table className = "table" border = "1">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>담당교수</th>
                                    <th>담당조교</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >이름</td>
                                    <td>손윤식</td>
                                    <td>김동효</td>
                                </tr>
                                <tr>
                                    <td >이메일</td>
                                    <td>prof@gmail</td>
                                    <td>t/a@gmail</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 
            </div>
        </div>
    );
};
export default ClassInfor;
