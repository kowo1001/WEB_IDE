import React, { Component } from 'react';
import { 
} from 'react-bootstrap';
import HomeOption from '../../../components/HomeOption';
import Profile from '../../../components/Profile/Profile'
import MyListCoures from '../../../layout/Home/MyListCourses';
import CreateCourse from '../../../layout/Home/CreateCourse';
class Home extends Component {
  constructor(props)
  {
    super(props);
  }
  LayoutHomeBottom = () =>{
    var path = this.props.location.search;
    path = path.substring(3,path.length);
    switch (path) {
      case "home":
        return <MyListCoures />
      case "opencourse":
          return <CreateCourse />
      default:
        return <MyListCoures />
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
                  li_2 = "인스턴스 개설"
                  li_3 = "학습 관리"
                  li_4 = "내 시간표"
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
