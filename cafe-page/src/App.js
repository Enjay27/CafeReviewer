import React, { useContext, useState, lazy, useEffect, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import './css/common.css';
import Main from './views/main/Main.js';
import LoginView from './views/login/LoginView.js';
import SingupView from './views/signup/SignupView';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path={'/'} component={Main} />
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={SingupView} />
      </Switch>
    </div>
  );
}

export default App;
