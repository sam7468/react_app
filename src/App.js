import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComp from './FunctionalComp';
import ClassComp from './ClassComp';
import ShowHide from './ShowHide';
import CountTime from './timer';
import Reverse_count from './Reversetimer'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
              <Route exact path="/">
                <CountTime/>
              </Route>
              <Route exact path="/countdown">  
                <Reverse_count/>
              </Route>
              <Route exact path="/showhide">
                <ShowHide/>
              </Route>
        </Switch>
      </Router>

      {/* < FunctionalComp/> */}
      {/* < ClassComp/> */}
    </div>
  );
}

export default App;
