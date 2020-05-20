import React from 'react';

const Table = (props) => (
  <div className="table-container">
    <table className="table is-fullwidth is-hoverable">{props.children}</table>
  </div>
);

export default Table;
