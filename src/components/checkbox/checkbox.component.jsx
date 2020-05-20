import React from 'react';

const Checkbox = ({ id, type, name, handleClick, isChecked, isDisabled }) => (
  <input id={id} name={name} type={type} onChange={handleClick} checked={isChecked} disabled={isDisabled} />
);

export default Checkbox;
