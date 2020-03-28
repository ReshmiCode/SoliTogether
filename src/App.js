import React from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom';

import Home from './Home/Home';
import Task from './Task/Task';
import Resources from './Resources/Resources';
import './App.css';

function App() {
  if (localStorage.getItem("userId") === null) {
    localStorage.setItem("userId", Math.random().toString(36).substring(2, 15));
  }

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/task" exact>
            <Task />
          </Route>
          <Route path="/resources" exact>
            <Resources />
          </Route>
          <Route path="/fun-stuff" exact>
            <fun-stuff />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
