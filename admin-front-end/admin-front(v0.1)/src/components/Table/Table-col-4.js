import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import './Table.css'
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
        <div>
        <Table striped bordered hover id = "table-col-4">
          <thead>
              <tr>
                <th> #</th>
                <th > {this.props.title1}</th>
                <th>  {this.props.title2}</th>
                <th>  {this.props.title3}</th>
                <th>  {this.props.title4}</th>
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
                <tr>
                    { ReactHtmlParser(tdTags) }
                    <td>
                        <Button styClass = "primary" onClick = {() => this.viewClick(item)}>Enter</Button>
                    </td>
                </tr>
              )
            })  
          }
        </tbody>
      </Table>
      <div>
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
      </div>
     </div>
    )
  }
}
export default TableCol4;