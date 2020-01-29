import React, { Component } from 'react';
import { 
} from 'react-bootstrap';
import HomeView from '../../../components/_Admin_components/_adm_Home';
import HomeOption from '../../../components/_Admin_components/_adm_HomeOption';
import Profile from '../../../components/Profile/Profile'
class Home extends Component {
  render(){ 
    return(
    <>
      <Profile />
      <div className = "home-page container">
            <div className = "content-top">
               <HomeOption />
            </div>
            <HomeView />
      </div>
    </>
    )
  };
}
export default Home;
