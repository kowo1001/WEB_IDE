import React, { Component } from 'react';
import { 
} from 'react-bootstrap';
import ListClass from '../../../components/_Admin_components/ListClass';
import OptionSelect from '../../../components/_Admin_components/OptionSelect';

class Home extends Component {
  render(){ 
    return(
    <>
      <div class = "home-page container">
            <div className = "content-top">
              <OptionSelect/>
            </div>
            <ListClass />
      </div>
    </>
    )
  };
}
export default Home;
