import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import { 
} from 'react-bootstrap';
import Profile from '../../components/Profile/Profile';
import ListClass from './ListClass';
import OptionSelect from './OptionSelect';

class Home extends Component {
  render(){ 
    return(
    <Router>
      <div class = "home-page container">
            <div className = "content-top">
              <OptionSelect/>
            </div>
            <ListClass />
      </div>
    </Router>
    )
  };
}
export default Home;
