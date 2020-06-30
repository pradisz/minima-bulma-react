import React from 'react';
import { Link } from 'react-router-dom';

import PageNotFoundImage from '../../assets/marginalia-page-not-found.png';

const NoMatchPage = () => {
  return (
    <div className="container is-fullhd">
      <section className="hero has-background-white is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered mb-6">
              <div className="column is-narrow has-text-centered">
                <figure className="image is-256x256">
                  <a href="https://icons8.com" target="blank">
                    <img src={PageNotFoundImage} alt="Empty" />
                  </a>
                  <figcaption>It looks like you're lost..</figcaption>
                  <br />
                  <br />
                  <Link to="/">
                    <button type="button" className="button is-dark is-rounded is-outlined">
                      GO BACK HOME
                    </button>
                  </Link>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoMatchPage;
