import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaSearch, FaEdit} from 'react-icons/fa';
import SelectSearch from '../../components/SelectSearch';
export default class ListProblem extends Component {
    render() {
        var listProblem = [
            {
                'num' :  1234,
                'title' : "하노이 탑",
                'author' : "홍길동",		
                'date' : "2020.03.23",
                'view_num' : "10",
                'correct_rate' : "100%" 
            },
            {
                'num' :  2345,
                'title' : "구구단",
                'author' : "홍길동",		
                'date' : "2020.03.23",
                'view_num' : "45",
                'correct_rate' : "100%" 
            },
            {
                'num' :  1414,
                'title' : "별 찍기 - 1",
                'author' : "홍길동",		
                'date' : "2020.03.23",
                'view_num' : "16",
                'correct_rate' : "99%" 
            },
            {
                'num' :  4561,
                'title' : "약수 구하기",
                'author' : "홍길동",		
                'date' : "2020.03.23",
                'view_num' : "20",
                'correct_rate' : "87%" 
            },
            {
                'num' :  4561,
                'title' : "단어의 개수",
                'author' : "홍길동",		
                'date' : "2020.03.23",
                'view_num' : "90",
                'correct_rate' : "90%" 
            },
            {
                'num' :  4561,
                'title' : "단어의 개수",
                'author' : "홍길동",		
                'date' : "2020.03.23",
                'view_num' : "90",
                'correct_rate' : "90%" 
            },
            {
                'num' :  4561,
                'title' : "단어의 개수",
                'author' : "홍길동",		
                'date' : "2020.03.23",
                'view_num' : "90",
                'correct_rate' : "90%" 
            },
            {
                'num' :  4561,
                'title' : "단어의 개수",
                'author' : "홍길동",		
                'date' : "2020.03.23",
                'view_num' : "90",
                'correct_rate' : "90%" 
            },
            {
                'num' :  4561,
                'title' : "단어의 개수",
                'author' : "홍길동",		
                'date' : "2020.03.23",
                'view_num' : "90",
                'correct_rate' : "90%" 
            },
            {
                'num' :  4561,
                'title' : "단어의 개수",
                'author' : "홍길동",		
                'date' : "2020.03.23",
                'view_num' : "90",
                'correct_rate' : "90%" 
            },
             {
                'num' :  4561,
                'title' : "단어의 개수",
                'author' : "홍길동",		
                'date' : "2020.03.23",
                'view_num' : "90",
                'correct_rate' : "90%" 
            }
        ];
        return (
            <div className = "list_problem">
                <h2 className = "u-text-center">문제 리스트</h2>
                    <div className = "headding">
                           <SelectSearch />
                            <Link className = "btn_write u-mr-bottom-small" to = "listproblem?p=createproblem" ><i className = "icon"><FaEdit/></i>문제 작성</Link>
                    </div>
                	<table className="table table-contribution" border = "1">
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
						{
							listProblem.map((item,index) => {
								return (
									<tr key = {index}>
										<td>{item.num}</td>
										<td><Link to = {`?p=view?id=${item.num}`}>{item.title}</Link></td>
										<td>{item.author}</td>
										<td>{item.date}</td>
										<td>{item.view_num}</td>
										<td>{item.correct_rate}</td>
									</tr>
								)
							})
						}
					</tbody>     
                    </table>
            </div>
        )
    }
}
