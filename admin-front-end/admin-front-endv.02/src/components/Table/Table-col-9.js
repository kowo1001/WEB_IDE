import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
  Pagination,
  Button,
  Table,
} from 'react-bootstrap';
class TableCol9 extends React.Component { 
  viewClick(params) {
    alert(JSON.stringify(params));
  };
  
  render() {
    var backgroundColor;
    if (this.props.title1 == "삭제") {
      backgroundColor = { background : '#f0ad4e',color : 'white'
    }
    } else 
    {
      backgroundColor = { background : '#337ab7',color : 'white'}
    }
    
    return (
      <div class = "text-center">
        <Table striped bordered hover id="table-col-9">
          <thead>
            <tr>
            {this.props.status}
              <th>  {this.props.title1}</th>
              <th>  {this.props.title2}</th>
              <th>  {this.props.title3}</th>
              <th>  {this.props.title4}</th>
              <th>  {this.props.title5}</th>
              <th > {this.props.title6}</th>
              <th>  {this.props.title7}</th>
              <th > {this.props.title8}</th>
              <th>  {this.props.title9}</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map((item) => {
                var tdTags = '';
                for (var key in item)
                  tdTags += '<td>' + item[key] + '</td>';
                return (
                  <tr>
                    <td id="status">
                      <button className = "btn" id ="btn3"  style = {backgroundColor} onClick={() => this.viewClick(item)}> {this.props.title1} </button>
                    </td>
                    {ReactHtmlParser(tdTags)}
                    <td id="status">
                      <button className = "btn btn-primary" id ="btn4" onClick={() => this.viewClick(item)}> 조회 </button>
                    </td>
                  </tr>

                )
              })
            }
          </tbody>
        </Table>
        <div id = "paging">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>        
        <div className="Bar">
        </div>
        &nbsp;
      </div>
    )
  }
}
export default TableCol9;