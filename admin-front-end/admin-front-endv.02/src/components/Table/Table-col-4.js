import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import { 
        Pagination,
        Button,
        Table,
} from 'react-bootstrap';
class TableCol4 extends React.Component {

  viewClick(params) {
    alert(JSON.stringify(params));
  };
    render() {
      return (   
        <div className = "text-center">
        <table id = "table-col-4" className = "table-bordered table">
          <thead className = "thead-light">
              <tr className = "text-center">
                <th width = "5%"> #</th>
                <th width = "20%"> {this.props.title1}</th>
                <th width = "20%">  {this.props.title2}</th>
                <th width = "20%">  {this.props.title3}</th>
                <th width = "10%">  {this.props.title4}</th>
              </tr>
          </thead>
          <tbody>
          {
            this.props.data.map((item,index) => 
            { 
              var tdTags =  '';
              for(var key in item)
                 tdTags += '<td>' + item[key] + '</td>';
              return (
                <tr key = {index}>
                    { ReactHtmlParser(tdTags) }
                    <td>
                        <button className = "btn btn-primary" onClick = {() => this.viewClick(item)}>이동가기</button>
                    </td>
                </tr>
              )
            })  
          }
        </tbody>
      </table>
      <div>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>;
      </div>
     </div>
    )
  }
}
export default TableCol4;