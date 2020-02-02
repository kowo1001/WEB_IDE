import React, { Component } from 'react';
import { 
} from 'react-bootstrap';
import ListClass from '../../../components/Student_components/Home';
import OptionSelect from '../../../components/Student_components/HomeOption';
import Profile from '../../../components/Profile/Profile'
import Header from '../../../components/Header/Header';
class HomeStudent extends Component {
  render(){ 
    return(
    <>
      <Header />
      <Profile />
      <div className = "home-page container">
            <div className = "content-top">
              <OptionSelect/>
            </div>
            <ListClass />
      </div>
    </>
    )
  };
}
export default HomeStudent;
