import React, { Component } from 'react';
import HomeOption from '../../../components/HomeOption';
import Profile from '../../../components/Profile'
import MyListClass from '../../../layout/Home/MyListClass';
import Class from '../Class/Class';
import RegisterClass from '../../../layout/Home/RegisterClass';
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
      case "registerclass":
        return <RegisterClass />
      case "class":
        return <Class />
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
                  headerText = {[
                      {
                        title : "강좌 목록",
                        page  : "home",
                        isSelected: this.props.block.substring(3,this.props.block.length) === "home"
                      },
                      {
                        title : "강좌 신청",
                        page  : "registerclass",
                        isSelected: this.props.block.substring(3,this.props.block.length) === "registerclass"
                      },
                      {
                        title : "학습 관리",
                        page  : "class",
                        isSelected: this.props.block.substring(3,this.props.block.length) === "class"
                      },
                      {
                        title : "시간표",
                        page  : "time",
                        isSelected: this.props.block.substring(3,this.props.block.length) === "time"
                      }
                    ]}
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
