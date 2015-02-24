import React from 'react';
import TableInfo from './TableInfo';
import TableSearch from './TableSearch';

let TableExplorer = React.createClass({
  displayName: 'TableExplorer',

  render() {
    return (
      <div className="panel panel-default panel-container">
        <div className='panel-heading'>
          <h3 className='panel-title'>
            Table explorer
          </h3>
        </div>
        <TableSearch />
        <TableInfo />
      </div>
    );
  }
});

export default TableExplorer;