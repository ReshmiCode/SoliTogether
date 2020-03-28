import React from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom';

import Home from './Home/Home';
import HomeTasks from './Home/HomeTasks';
import HomeResources from './Home/HomeResources';
import Task from './Task/Task';
import Resources from './Resources/Resources';
import FunStuff from './FunStuff/FunStuff';
import SubmitResource from './Resources/SubmitResource';
import GetSupport from './Resources/Pages/GetSupport';
import Hustle from './Resources/Pages/Hustle';
import Relax from './Resources/Pages/Relax';
import Attend from './Resources/Pages/Attend';
import Host from './Resources/Pages/Host';
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
          <Route path="/home-tasks" exact>
            <HomeTasks />
          </Route>
          <Route path="/home-resources" exact>
            <HomeResources />
          </Route>
          <Route path="/task" exact>
            <Task />
          </Route>
          <Route path="/resources" exact>
            <Resources />
          </Route>
          <Route path="/fun-stuff" exact>
            <FunStuff />
          </Route>
          <Route path="/submit-resource" exact>
            <SubmitResource />
          </Route>
          <Route path="/get-support" exact>
            <GetSupport />
          </Route>
          <Route path="/hustle" exact>
            <Hustle />
          </Route>
          <Route path="/relax" exact>
            <Relax />
          </Route>
          <Route path="/attend" exact>
            <Attend />
          </Route>
          <Route path="/host" exact>
            <Host />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
