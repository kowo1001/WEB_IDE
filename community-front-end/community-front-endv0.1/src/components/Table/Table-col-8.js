import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import { 
        Button,
        Table,
} from 'react-bootstrap';
class TableCol8 extends React.Component {

    viewClick(params) {
      alert(JSON.stringify(params));
    };

    render() {
      return (   
        <div>
        <Table striped bordered hover id = "table-col-8">
          <thead>
              <tr>
                <th width = "5%"> {this.props.title1}</th>
                <th width = "15%"> {this.props.title2}</th>
                <th width = "10%">  {this.props.title3}</th>
                <th width = "10%">  {this.props.title4}</th>
                <th width = "10%">  {this.props.title5}</th>
                <th width = "10%">  {this.props.title6}</th>
                <th width = "10%">  {this.props.title7}</th>
                <th width = "8%">  비고</th>
              </tr>
          </thead>
          <tbody>
          {
            this.props.data.map((item,index) => 
            { 
              var tdTags =  '';
              var countForText = 0;
              for(var key in item){
                    countForText++;
                  if(countForText === 7){
                    tdTags += '<td><input type="text" size = "1" placeholder = "'+ item[key]  + '"</input></td>';
                  }else
                     tdTags += '<td>' + item[key] + '</td>';
              }
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
      </Table>
     </div>
    )
  }
}
export default TableCol8;