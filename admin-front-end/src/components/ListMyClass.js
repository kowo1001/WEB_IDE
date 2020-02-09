import React from 'react';

function ListMyClass(props) {
    return (
        <select className="in-drop" id="list-class">
            <option value="class" className="in-of">심화프로그래밍 01</option>
            <option value="class" className="in-of">심화프로그래밍 02</option>
            <option value="class" className="in-of">심화프로그래밍 03</option>
        </select>
    );
}
export default ListMyClass;