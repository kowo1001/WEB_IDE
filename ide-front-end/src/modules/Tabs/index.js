import React from 'react';

import './tab.scss';

function Tab({file, active, onClick, onClose}) {
    return (
        <div tabIndex="-1" className={["tab-wrapper", active? "active" : ""].join(" ")} 
            onClick={() => {onClick(file)}}>
            <span className={["filename", file.modify ? "modify" : ""].join(" ")}>{file.name}</span>
            <span onClick={(e) => {e.stopPropagation(); onClose(file)}}>x</span>
        </div>
    )
}

function Tabs({className, files, selectFile, onClick, onClose}) {
    return (
        <div className={'TAB ' + className}>
            <div className="tabs-wrapper">
                {files.map((file, idx)=>{
                    return (
                    <Tab key={idx} file={file} active={file === selectFile} onClick={onClick} onClose={onClose}></Tab>
                    );
                })}
            </div>
        </div>
    )
}


export default Tabs;