import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

const AccountPage = () => {
  const history = useHistory();
  const { currentUser } = useAuth();

  // Uncomment code bellow to make update profile work!
  // const { currentUser, editProfile } = useAuth();

  const [displayName, setDisplayName] = useState(currentUser?.displayName);
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [fileName, setFileName] = useState(undefined);

  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(undefined);
  const [error, setError] = useState(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setSuccess('This is success response example');
      setError('This is success response example');
      setLoading(false);
    }, 1500);

    // Uncomment code bellow to make update profile work!
    // editProfile(displayName, selectedFile).then(
    //   (res) => {
    //     setSuccess(res);
    //     setLoading(false);
    //   },
    //   (error) => {
    //     setError(error.message);
    //     setLoading(false);
    //   }
    // );
  };

  const handleThumbnail = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
    setFileName(event.target.files[0].name);
  };

  return (
    <div className="main container">
      <form onSubmit={handleSubmit}>
        <div className="level">
          <div className="level-left">
            <h1 className="title is-4">Account</h1>
          </div>
          <div className="level-right">
            <button
              onClick={() => history.goBack()}
              type="button"
              className={`button is-small is-dark is-rounded is-outlined ${isLoading && 'is-hidden'}`}
            >
              Discard
            </button>
            <div className="mx-1"></div>
            <button type="submit" className={`button is-small is-dark is-rounded ${isLoading && 'is-loading'}`}>
              Save
            </button>
          </div>
        </div>
        {success && (
          <div className="notification is-success is-light">
            <button onClick={() => setSuccess(undefined)} className="delete"></button>
            {success}
          </div>
        )}
        {error && (
          <div className="notification is-danger is-light">
            <button onClick={() => setError(undefined)} className="delete"></button>
            {error}
          </div>
        )}
        <div className="columns">
          <div className="column is-full-tablet is-two-thirds-desktop">
            <div className="card">
              <div className="card-content">
                <div className="field">
                  <label className="label">Full name</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      onChange={(event) => setDisplayName(event.target.value)}
                      value={displayName}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="card">
              <div className="card-content">
                <div className="field">
                  <label className="label">Email address</label>
                  <div className="control">
                    <input type="text" className="input has-background-white" value={currentUser?.email} disabled />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="card">
              <div className="card-content">
                <h3 className="title is-6">Avatar</h3>
                <div className="columns is-vcentered">
                  <div className="column is-narrow">
                    <figure className="image is-128x128">
                      <img
                        src={
                          selectedFile
                            ? selectedFile
                            : currentUser?.photoURL
                            ? currentUser?.photoURL
                            : 'https://bulma.io/images/placeholders/128x128.png'
                        }
                        alt="Placeholder"
                        style={{ width: 128, height: 128, borderRadius: '50%', objectFit: 'cover' }}
                      />
                    </figure>
                  </div>
                  <div className="column">
                    <div className="file has-name is-fullwidth">
                      <label className="file-label">
                        <input className="file-input" type="file" onChange={handleThumbnail} />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="fas fa-upload"></i>
                          </span>
                          <span className="file-label">Choose a file…</span>
                        </span>
                        {fileName && <span className="file-name">{fileName}</span>}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountPage;
