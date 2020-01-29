import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
  Pagination,
  Button,
  Table,
} from 'react-bootstrap';
class TableCol6 extends React.Component {

  viewClick(params) {
    alert(JSON.stringify(params));
  };

  render() {
    return (
      <div>
        <Table striped bordered hover id="table-col-6">
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
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map((item,index) => {
                var tdTags = '';
                for (var key in item)
                  tdTags += '<td>' + item[key] + '</td>';
                return (
                  <tr key = {index}>
                    {ReactHtmlParser(tdTags)}
                    <td id="status">
                      <button className="btn btn-primary" id ="btn1" onClick={() => this.viewClick(item)}> 확인 </button>&nbsp;
                      <button className="btn btn-danger" id ="btn2" onClick={() => this.viewClick(item)}> 취소 </button>
                    </td>
                  </tr>

                )
              })
            }
          </tbody>
        </Table>
        <div id = "paging" className = "text-center">
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
export default TableCol6;