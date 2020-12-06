import React, { useEffect } from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Projects from '../components/Projects'
import Stack from '../components/Stack'
import Swapi from '../pages/Swapi'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Main() {
  return (
    <Router>
      <div>
        <div className="container box-content">
          <div className="content" style={{backgroundColor: '#1B2435'}} >
            <Header />
            <Switch>
              <Route exact path="/">
                <Carousel />
                <Stack />
              </Route>
              <Route path="/swapi">
                <Swapi />
              </Route>
            </Switch>
            {/* <Projects /> */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Main;
