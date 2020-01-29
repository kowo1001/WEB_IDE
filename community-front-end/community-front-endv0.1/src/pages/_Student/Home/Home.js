import React, { Component } from 'react';
import { 
} from 'react-bootstrap';
import ListClass from '../../../components/_Admin_components/_adm_Home';
import OptionSelect from '../../../components/_Student_components/_std_HomeOption';
import Profile from '../../../components/Profile/Profile'
class HomeStudent extends Component {
  render(){ 
    return(
    <>
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
