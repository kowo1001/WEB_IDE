import React from 'react';
import classNames from 'classnames';
import '../resources/scss/Table.scss';
import '../App.scss';

function Table({children,className}) {
return <table className={classNames('Table',className)}>{children}</table>
}

Table.defaultProps = {
    color: 'black'
};

export default Table;
