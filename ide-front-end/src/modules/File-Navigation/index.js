import React, { useState } from 'react';
import './index.scss';

function Directory ({file, tabSize, onClick}) {
    const [open, setOpen] = useState(true);

    return (
        <div className="direcotry-wrapper" style={{"paddingLeft": tabSize*10}}>
            <p onClick={()=>{setOpen(!open)}}>
                {open && <img src={require('./images/close.png')}/>}
                {!open && <img src={require('./images/open.png')}/>}
                {file.name}
            </p>
            {open && file.files.map((file, idx) => {
                if(file.isDirectory) {
                    return (
                        <Directory key={idx} file={file} tabSize={tabSize + 1} onClick={onClick}></Directory>
                    );
                }
                return (
                    <p key={idx} style={{"paddingLeft": tabSize*10 + 20}} onClick={() => {onClick(file)}}>{file.name}</p>
                );
            })}
        </div>
    );
}

function FileNavigation({openFiles, files, onClick, onClose}) {
    const [openFilesNavigation, setOpenFilesNavigation] = useState(true);
    const [filesNavigation, setFilesNavigation] = useState(true);

    return (
        <div className="FILE-NAVIGATION">
            <h1 tabIndex="-1" onClick={()=>{setOpenFilesNavigation(!openFilesNavigation)}}>Open Files</h1>
            {openFilesNavigation && openFiles.map((file, idx) => {
                return (
                    <p className="open-file" key={`open-file-${idx}`} onClick={()=>{onClick(file)}}>
                        <span className={["filename", file.modify ? "modify" : ""].join(" ")}>{file.name}</span>
                        <span onClick={(e)=>{e.stopPropagation(); onClose(file)}}>x</span>
                    </p>
                )
            })}
            <h1 tabIndex="-1" onClick={()=>{setFilesNavigation(!filesNavigation)}}>Project Name</h1>
            <div className="file-wrapper">
            {filesNavigation && files.map((file, idx) => {
                if(file.isDirectory) {
                    return <Directory file={file} tabSize={0} key={`directory-idx-${idx}`} onClick={onClick}></Directory>
                }
                return (
                    <p key={`file-idx-${idx}`} onClick={() => {onClick(file)}}>{file.name}</p>
                );
            })}
            </div>
        </div>
    );
}

export default FileNavigation;