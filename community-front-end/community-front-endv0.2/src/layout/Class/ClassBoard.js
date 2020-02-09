import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CKEditor from 'ckeditor4-react';
import { MdSpeakerNotes } from "react-icons/md";
import { GoFilePdf } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import SelectSearch from '../../components/SelectSearch';
import ClassViewTable from '../../components/ClassViewTable';
import FormWriteClass from '../../components/FormWriteClass';
import ClassViewItem from '../../components/ClassViewItem';
var displayCheck;
var displayCheckWriteNote;
export default class ClassBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display : true,
            displayWriteNote : true,
        }
    }
    ViewNotice(){
        this.setState({
            display : !this.state.display
        });
        if (this.state.display) {
            displayCheck = { display : 'block'}
        } else {
            displayCheck = { display : 'none'}
        }
    }
    writeNotice(){
        this.setState({
            displayWriteNote : !this.state.displayWriteNote
        });
        if (this.state.displayWriteNote) {
            displayCheckWriteNote = { display : 'block'}
        } else {
            displayCheckWriteNote = { display : 'none'}
        }
    }
    render() {
        return (
            <div className  = "class_board">
                <h2><i class = "icon"> <MdSpeakerNotes /></i>공지사항</h2>
                <div className = "headding u-mr-bottom-small">
                    <SelectSearch />
                </div>
                <div  className = "board_content u-mr-bottom-small">
                    <ClassViewTable />
                </div>
                <div className = "board_content-view u-mr-bottom-small" style = {displayCheck} >
                    <ClassViewItem />
                </div>
            </div>
        )
    }
}
