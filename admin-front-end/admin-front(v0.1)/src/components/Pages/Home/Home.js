import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import { Button,
  Table,
  Row,
  Col,
  Navbar,
  Container
} from 'react-bootstrap';
import '../Pages.css'
import Profile from '../../Profile/Profile';
import RouterURL from '../../../router/RouterURL_Home';

class Home extends Component {
  render(){ 
    return(
    <Router>
      <div class = "container">
            <Profile />
            <div className = "content-top">
               <div className = "option-select">
                    <Link to="/home/listclass"><td>개설 강좌 목록</td></Link>
                    <Link to="/home/register"><td>강좌 인스턴스 개설</td></Link>
               </div>
            </div>
            <RouterURL />
      </div>
    </Router>
    )
  };
}
export default Home;
