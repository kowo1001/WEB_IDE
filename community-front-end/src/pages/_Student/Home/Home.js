import React, { Component } from 'react';
import HomeOption from '../../../components/HomeOption';
import Profile from '../../../components/Profile'
import MyListClass from '../../../layout/Home/MyListClass';
import CreateClass from '../../../layout/Home/CreateClass';
class Home extends Component {
  constructor(props)
  {
    super(props);
  }
  LayoutHomeBottom = () =>{
    var path = this.props.block;
    var block = path.substring(3,path.length);
    switch (block) {
      case "home":
        return <MyListClass />
      case "openclass":
          return <CreateClass />
      default:
          return <MyListClass />
    }
  }
  render(){ 
    return(
    <>
        <Profile />
        <div className = "home">
          <div className = "row">
              <div className = "home__top nav-bar">
                <HomeOption  
                  li_1 = "개설 강좌 목록"
                  li_2 = "강좌 신청"
                  li_3 = "학습 관리"
                  li_4 = "시간표"
                />
                </div>
                <div className = "home_bottom">
                  <div className = "home_bottom-text mr-bottom-small">
                      <h3 className = "text_headding"><i className='fas fa-home'>&nbsp;</i>학기정보 : <b>2020년 1학기</b></h3>
                  </div>
                  <div className = "home_bottom-box">
                    {this.LayoutHomeBottom()}
                  </div>
                </div>
          </div>
        </div>
    </>
    )
  };
}
export default Home;
