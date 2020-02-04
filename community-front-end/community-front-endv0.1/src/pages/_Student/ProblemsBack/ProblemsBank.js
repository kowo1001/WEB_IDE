import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button';

class ProblemBank extends Component {
  render(){ 
    return( 
        <>
        <Header />
      <div className = "problem-bank container">
           <h2 className = "text-center">문제 리스트</h2>
           <div className = "problem-search">
              <select name="" id="problem-search-option" required="required">
                  <option value="">제목</option>
                  <option value="">언어</option>
              </select>&nbsp;
              <input  id="search" type="text" placeholder="Search.."></input>
              <button type="submit"><i class="fa fa-search"></i></button>
              <Link className = "btn btn-primary pull-right" type="button" onClick = {()=> this.writeNotice()}>문제 작성</Link>
            </div>
            <div className = "list-problem, , body-height"><br/>
            <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                              <th width = "10%">문제 번호</th>
                              <th width = "35%">제목</th>
                              <th width = "10%">작성자</th>
                              <th width = "10%">작성일</th>
                              <th width = "10%">조회수</th>
                              <th width = "10%">정답 비율</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><Link to = "list/1">하노이 탑</Link></td>
                                <td>홍길동</td>
                                <td>2020-03-23</td>
                                <td>15</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><Link to = "list/2">구구단</Link></td>
                                <td>홍길동</td>
                                <td>2020-03-23</td>
                                <td>15</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><Link to = "list/3">미로 찾기</Link></td>
                                <td>홍길동</td>
                                <td>2020-03-23</td>
                                <td>15</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><Link to = "list/4">지뢰 찾기</Link></td>
                                <td>홍길동</td>
                                <td>2020-03-23</td>
                                <td>15</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><Link to = "list/5">테스트</Link></td>
                                <td>홍길동</td>
                                <td>2020-03-23</td>
                                <td>15</td>
                                <td>100%</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
      </div>
      </>
    )
  };
}
export default ProblemBank;
