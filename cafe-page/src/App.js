import React, {useContext, useState, lazy, useEffect, Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import './App.css';
import './css/common.css';
import Main from "./views/main/Main.js";
import LoginView from "./views/login/LoginView.js";


function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact={true} path={"/"} component={Main} />
            <Route path="/login" component={LoginView} />



        </Switch>
    </div>
  );
}

export default App;
