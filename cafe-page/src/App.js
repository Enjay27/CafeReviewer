import React, {useContext, useState, lazy, useEffect, Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import './App.css';
import './css/common.scss';
import MainView from "./views/main/MainView.js";
import LoginView from "./views/login/LoginView.js";
import NotFound from 'components/Error/NotFound';


function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path={"/"} component={MainView} />
            <Route path="/login" component={LoginView} />
            <Route path={["*", "/error"]} component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
