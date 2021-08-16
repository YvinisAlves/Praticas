import './style.css'
import React from 'react';
import Topo from './components/Topo';
import {BrowserRouter as Router,
      Redirect,
      Route,
      Switch,
    } from 'react-router-dom';
import PageProvider from './context/Pages';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';


function App() {
  return (
    <PageProvider>
      <Router>
        <div className="App">
          <Topo></Topo>
          <div id="exercicios">
            <Switch>
              <Route exact path="/">
                <Redirect to="/1" />
              </Route>
              <Route path="/1" component={Page1}/>
              <Route path="/2" component={Page2}/>
              <Route path="/3" component={Page3}/>
              <Route path="/4" component={Page4}/>
            </Switch>
          </div>
        </div>
      </Router>
    </PageProvider>
  );
}

export default App;
