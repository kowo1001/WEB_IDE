import React, { Component } from 'react';
import TableCol8 from '../../../components/Table/Table-col-8';
import { Link } from 'react-router-dom';
class ClassEvaluation extends Component {
    save(){
       
    }
  render(){ 
    var listEvaluation = [
        {
            no : 11234,
            major : '컴퓨터 공학과',
            name : '홍길동',
            date : '2020.01.01',
            file : 'report.pdf',
            source : 'source.c',
            score : '0',
        },
        {
            no : 11234,
            major : '컴퓨터 공학과',
            name : '홍길동',
            date : '2020.01.01',
            file : 'report.pdf',
            source : 'source.c',
            score : '0',
        },
        {
            no : 11234,
            major : '컴퓨터 공학과',
            name : '홍길동',
            date : '2020.01.01',
            file : 'report.pdf',
            source : 'source.c',
            score : '0',
        },
        {
            no : 11234,
            major : '컴퓨터 공학과',
            name : '홍길동',
            date : '2020.01.01',
            file : 'report.pdf',
            source : 'source.c',
            score : '0',
        },
        {
            no : 11234,
            major : '컴퓨터 공학과',
            name : '홍길동',
            date : '2020.01.01',
            file : 'report.pdf',
            source : 'source.c',
            score : '0',
        },
        {
            no : 11234,
            major : '컴퓨터 공학과',
            name : '홍길동',
            date : '2020.01.01',
            file : 'report.pdf',
            source : 'source.c',
            score : '0',
        }
    ]
    return(            
        <div className = "evaluation">
            <input className="form-control" id="search" type="text" placeholder="Search.."></input>
            <Link to = "/admin/class"><button className = "btn btn-primary pull-right" >평가 저장 </button></Link><br/><br/>
            <TableCol8
                title1 = "학번"
                title2 = "학과"
                title3 = "이름"
                title4 = "제출일지"
                title5 = "보고서"
                title6 = "소스코드"
                title7 = "평가점수"
                data = { listEvaluation }
            >
            </TableCol8>
        </div>
    )
  };
}
export default ClassEvaluation;
