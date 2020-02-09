import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CKEditor from 'ckeditor4-react';
import { MdSpeakerNotes, MdLibraryBooks } from "react-icons/md";
import { GoFilePdf } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import SelectSearch from '../../components/SelectSearch';
import ClassViewTable from '../../components/ClassViewTable';
import FormWriteClass from '../../components/FormWriteClass';
import ClassViewItem from '../../components/ClassViewItem';
import Homework from '../../components/Homework';
var displayCheck;
var displayCheckWriteNote;
export default class ClassBoard extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            display : true,
            displayWriteNote : true,
            isDisplayView : false,
            isDisplayViewNotice : false
        }
    }
    // ViewNotice(){
    //     this.setState({
    //         display : !this.state.display
    //     });
    //     if (this.state.display) {
    //         displayCheck = { display : 'block'}
    //     } else {
    //         displayCheck = { display : 'none'}
    //     }
    // }
    // writeNotice(){
    //     this.setState({
    //         displayWriteNote : !this.state.displayWriteNote
    //     });
    //     if (this.state.displayWriteNote) {
    //         displayCheckWriteNote = { display : 'block'}
    //     } else {
    //         displayCheckWriteNote = { display : 'none'}
    //     } this.props.
    // }
    eventItemSet = () =>{
        this.setState({
            isDisplayView : !this.state.isDisplayView
        })
    }
    eventNoticeClick = () => {
        this.setState({
            isDisplayViewNotice : !this.state.isDisplayViewNotice
        })
    }
    isDisplayViewItem = () => {
        if(this.state.isDisplayView)
             return <ClassViewItem />;
    }
    handleNotice= (event) => {
        event.preventDefault();
        this.eventNoticeClick();            
    }
    isDisplayWriteNotice = () => {
        if(this.state.isDisplayViewNotice)
            return (
                <FormWriteClass 
                    title = "공지사항"
                    btnName = "공지 등록"
                />
            );  
    }

    render() {
        return (
            <>
            <div className  = "class_board">
                <h2><i class = "icon"> <MdSpeakerNotes /></i>공지사항</h2>
                <div className = "headding u-mr-bottom-small">
                    <SelectSearch />
                    <Link className = "btn_write u-mr-bottom-small" to = "#" onClick = {(event)=> this.handleNotice(event)}><i className = "icon"><FaEdit/></i>글쓰기</Link>
                </div>
                <div  className = "board_content u-mr-bottom-small">
                    <ClassViewTable
                        eventItemClick = {this.eventItemSet}
                    />
                </div>
                <div className = "board_content-view u-mr-bottom-small" style = {displayCheck} >
                    {this.isDisplayViewItem()}
                </div>
                <div className = "board_content-write" style = {displayCheckWriteNote} >
                     {this.isDisplayWriteNotice()}
                </div>
            </div>
            <div className = "class_homeworks u-mr-top-big">   
                <h2><i className = "icon"><MdLibraryBooks /></i>과제 관리</h2>    
                <SelectSearch />
                <div className = "u-text-right u-mr-bottom-small">
                <Link className = "btn_classtask" to = "class?p=createhomework" ><i className = "icon"><FaEdit/>&nbsp;</i>과제 등록</Link>
                </div>
                <div className =  "list_homework">
                <Homework/>
                <Homework/>
                <Homework/>
                <Homework/>
                </div>
            </div>
            </>

        )
    }
}
