import React, { Component } from 'react';
import ListProblem from '../../../layout/ListProblem/ListProblem';
import ProblemDetails from '../../../layout/ListProblem/ProblemDetails';
import { MdFirstPage, MdLastPage } from "react-icons/md";
import { Link } from 'react-router-dom';
import CreateProblem from '../../../layout/ListProblem/CreateProblem';
class ProblemBank extends Component {
	constructor(props)
	{
		super(props);
	}
	bodyLayout = () =>{
		/*
		http://localhost:3000/admin/listproblem?p=view
		또는
		http://localhost:3000/admin/listproblem?p=view?id=4561
		해당 링트는 ?p=view?id=4561 값을 받아서 Route 함
		*/
		var params = this.props.block;
		if(params != ""){
			var res = this.props.block.split("?");
			var path = res[1].substring(2, res[1].length);
		}
		switch (path) {
			/*
			해당하는 문제에 대한 정보를 보여줄 페이지를 이동함
			 */
		  	case "view":
				var id = res[2].substring(3, res[2].length);
				return <ProblemDetails 
					problem_id = {id}
				/>
			case "createproblem":
				return <CreateProblem />
		  	default:
				return <ListProblem /> 
		}
	}
  	render(){ 
		return( 
		<div className = "listproblem">
			<div className = "row">
				<div className = "content">
					{this.bodyLayout()}
				</div>
			</div>
		</div>
		)
  };
}
export default ProblemBank;
