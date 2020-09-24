# minima-bulma-react

A minimal web dashboard starter with Create React App and Firebase based on Bulma CSS Framework.

## Demo

- https://minima-bulma-react.web.app/

## Features

- Minimal web dashboard with `Bulma 0.9.0`
- Firebase authentication with Email, Google or Facebook
- Update firebase authentication profile
- React Hooks
- Context API

## Prerequisites

- Create a Firebase Project using the [Firebase Developer Console](https://console.firebase.google.com)
- Enable Email, Google and Facebook sign-in in your [authentication provider settings](https://console.firebase.google.com/project/_/authentication/providers).
- Install [Firebase CLI Tools](https://github.com/firebase/firebase-tools) if you have not already and log in with `firebase login`.
- Configure this sample to use your project using `firebase use --add` and select your project.

## Installing

A step by step series of examples that tell you how to get a development env running

```
yarn install

or

npm install
```

Rename `.env.example` to `.env` and add your firebase app configuration in react environtment variables:
```
REACT_APP_API_KEY = "FIREBASE_API_KEY"
REACT_APP_AUTH_DOMAIN = "FIREBASE_AUTH_DOMAIN"
REACT_APP_DATABASE_URL = "FIREBASE_DATABASE_URL"
REACT_APP_PROJECT_ID = "FIREBASE_PROJECT_ID"
REACT_APP_STORAGE_BUCKET = "FIREBASE_STORAGE_BUCKET"
REACT_APP_MESSAGING_SENDER_ID = "FIREBASE_MESSAGING_SENDER_ID"
REACT_APP_APP_ID = "FIREBASE_APP_ID"
REACT_APP_MEASUREMENT_ID = "FIREBASE_MEASUREMENT_ID"
```

## Running Locally
```
yarn start

or

npm start
```

## Deployment

```
yarn build

firebase deploy
```
