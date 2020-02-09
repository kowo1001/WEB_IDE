import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TiArrowRightThick } from 'react-icons/ti';
import axios from 'axios';

class MyListCoures extends Component {
  state = {
    myRegisterClass: []
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/lectures`);
      this.setState({ myRegisterClass: data });
    } catch(e) {
      alert("오류!");
    }
  }

  //array MAP
  render(){ 
    return(
        <table border="1" className="table table-contribution">
            <thead>
                <tr>
                    <th width = "5%"> #</th>
                    <th width = "20%">과목명</th>
                    <th width = "20%">과목 코드</th>
                    <th width = "20%">담당 교수</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.myRegisterClass.map((item,index) => (
                    <tr key = {index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td><Link to = {`/admin/class?p=${item.name}`} >{item.class_name}<TiArrowRightThick /></Link></td>
                        <td>{item.professor}</td>
                    </tr>
                ))  
            }
            </tbody>
        </table>
)
  };
}
export default MyListCoures;
