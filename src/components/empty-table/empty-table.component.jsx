import React from 'react';

import emptyImage from '../../assets/marginalia-list-is-empty.png';

const EmptyTable = () => (
  <div className="container">
    <br />
    <br />
    <br />
    <div className="columns is-mobile is-centered has-text-centered">
      <div className="column is-narrow">
        <figure className="image is-256x256">
          <a href="https://icons8.com" target="blank">
            <img src={emptyImage} alt="Empty" />
          </a>
          <figcaption>There's nothing here right now</figcaption>
        </figure>
      </div>
    </div>
  </div>
);

export default EmptyTable;
