import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import { Button,
    Dropdown,
    DropdownButton,
  Table,
  ListGroup,
  Tab,
  Row,
  Col,
  Navbar,
  Container
} from 'react-bootstrap';
import HomeWork from './HomeWork';

class HomeworkList extends Component {
  render(){ 
    return(
        <div>
            <HomeWork />
            <HomeWork />
            <HomeWork />
            <HomeWork />
        </div>
    )
  };
}
export default HomeworkList;
