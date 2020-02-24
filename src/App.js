import React from "react";
import Nav from "./components/Nav";
import LandingPage from "./components/Landing_Page";
import Movie from "./components/Movie";
import TVshows from "./components/TVshows";
import Popular from "./components/Popular";
import Newreleases from "./components/Newreleases";
import MoreInfo from "./components/More_Info";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="main-container-wrapper">
        <Nav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/movies" component={Movie} />
          <Route path="/tvshows" component={TVshows} />
          <Route path="/popular" component={Popular} />
          <Route path="/newreleases" component={Newreleases} />
          <Route path="/:id" component={MoreInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// <LandingPage />

//<Route path="search_movies" component={SearchMovies} />