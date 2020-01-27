import React from 'react'
import logo from '../../images/logo.jpg'

function _HeaderTop(props) {
    return (
        <>
          <div className="container-fluid">
            <div className="row header-top">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <div className = "logo">
                        <img
                                width = {100}
                                height = {100}
                                src= {logo}
                                alt="Dongguk logo"
                        />
                    </div>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-center">  
                    <h1>Dongguk University Programming Learning Management System</h1>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <div className = "log-out">
                        <span>201515 (홍길동)</span> &nbsp;<a href = "#">로그아웃</a>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}


export default _HeaderTop

