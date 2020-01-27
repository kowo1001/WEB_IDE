import React, { Component } from 'react';
import { Button,
} from 'react-bootstrap';
import TableCol8 from '../../../components/Table/Table-col-8';

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
            <input class="form-control" id="search" type="text" placeholder="Search.."></input>
            <Button styClass = "primary" className = "pull-right"  > 평가 저장 </Button><br/><br/>
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
