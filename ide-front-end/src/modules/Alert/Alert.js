import React from 'react';
import { render } from 'react-dom';

function Alert({title, text, btns}) {
    const ref = React.createRef();
    const modal = (
        <div className="fullsize" tabIndex="-1" onKeyDown={closeEvent} ref={ref}>
            <div className="modal-wrapper">
                <div className="modal-header" onClick={removeDom}>
                    {title}
                    <a className="close" onClick={()=>{removeDom()}}>x</a>
                </div>
                <div className="modal-body">{text}</div>
                <div className="modal-footer">
                    {btns.map((btn,idx) => (
                        <button key={`btn-${idx}`} onClick={()=>{removeDom(); btn.onClick()}}>{btn.text}</button>
                    ))}
                </div>
            </div>
        </div>
    )

    const ele = document.createElement("div");
    document.body.appendChild(ele);

    function closeEvent(e) {
        if(e.key === 'Escape') {
            ele.removeEventListener('keydown', closeEvent);
            removeDom();
        }
    }
    function removeDom () {
        document.body.removeChild(ele);
    }

    render(modal, ele);
    ref.current.focus();
}

export default Alert;