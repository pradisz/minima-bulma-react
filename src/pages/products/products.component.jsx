import React, { useState, useEffect } from 'react';

import Table from '../../components/table/table.component';
import Checkbox from '../../components/checkbox/checkbox.component';
import EmptyTable from '../../components/empty-table/empty-table.component';

import { Catalogues } from './mock';

const ProductsPage = () => {
  const [isCheckAll, setCheckAll] = useState(false);
  const [checkedList, setCheckItem] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Catalogues);
  }, []);

  const handleSelectAll = () => {
    setCheckAll(!isCheckAll);
    setCheckItem(list.map((item) => item.id));
    if (isCheckAll) setCheckItem([]);
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setCheckItem([...checkedList, id]);

    // Toggle 'checked' checkbox select all to triger actions
    setCheckAll(true);

    if (!checked) {
      setCheckItem(checkedList.filter((item) => item !== id));

      // Toggle 'uncheked' checkbox select all
      if (checkedList.length === 1) setCheckAll(false);
    }
  };

  const handleDelete = () => {
    setList([...list.filter((item) => !checkedList.includes(item.id))]);
    setCheckAll(false);
  };

  return (
    <div className="main container">
      <div className="level">
        <div className="level-left">
          <h1 className={`title is-4 ${isCheckAll ? 'has-text-info' : null}`}>
            {!isCheckAll ? 'Products' : `${checkedList.length} Product selected`}
          </h1>
        </div>

        {isCheckAll ? (
          <div className="level-right">
            <button onClick={handleDelete} className="button is-small is-white">
              <span className="icon is-small has-text-grey">
                <span className="material-icons">delete</span>
              </span>
              <span>Delete</span>
            </button>
          </div>
        ) : null}
      </div>

      {list.length !== 0 ? (
        <Table>
          <thead>
            <tr>
              <th width="2%">
                <Checkbox
                  type="checkbox"
                  name="selectAll"
                  id="selectAll"
                  handleClick={handleSelectAll}
                  isChecked={isCheckAll}
                  isDisabled={list.length === 0}
                />
              </th>
              <th>Name</th>
              <th>Date Modified</th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ id, name, lastModified }) => (
              <tr key={id}>
                <td>
                  <Checkbox
                    type="checkbox"
                    name={name}
                    id={id}
                    handleClick={handleClick}
                    isChecked={checkedList.includes(id)}
                  />
                </td>
                <td>{name}</td>
                <td>
                  <span className="is-size-7">{lastModified}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyTable />
      )}
    </div>
  );
};

export default ProductsPage;
