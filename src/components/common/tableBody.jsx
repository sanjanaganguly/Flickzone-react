import React, { Component } from 'react';
import _ from 'lodash';

export class TableBody extends Component {
    render() {

        const { data, columns } = this.props;

        return (
            <tbody>
                {data.map(item => (
                    <tr>{columns.map(col => <td>{_.get(item, col.path)}</td>)}</tr>
                ))}
            </tbody>
        )
    }
}

export default TableBody