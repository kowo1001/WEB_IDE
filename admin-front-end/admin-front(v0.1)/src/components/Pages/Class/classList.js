import React from 'react';

function ClassList(props) {
    return (
        <select class="in-drop" id="searchOption">
        <option value="class" className="in-of">CSE1012-심화프로그래밍 01</option>
        <option value="class" className="in-of">CSE1013-심화프로그래밍 02</option>
        <option value="class" className="in-of">CSE1014-심화프로그래밍 03</option>
</select>
    );
}

export default ClassList;