import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from "./landing_page/LandingPage.jsx";
import Listing from "./listing_page/Listing.jsx";
import ListingForm from "./post_page/ListingForm.jsx";
import Results from "./results_page/Results.jsx";
import Features from "./features_page/featuresPage.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PreviewPage from './preview_page/PreviewPage.jsx';
import "react-bootstrap/dist/react-bootstrap.min.js";

const baseURL = 'http://alcove.us-east-2.elasticbeanstalk.com';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListing: null,
      queriedZipCode: null,
      searchResults: null,
      path: '/'
    };
    this.returnToTop = this.returnToTop.bind(this);
  }

  getSelectedListing(id = 1) {
    Axios.get(`${baseURL}/getone`, { params: { id } })
      .then(data => {
        console.log('Data From Get Request', data);
      })
      .catch(console.log);
  }

  landingSearch(zip) {
    Axios.get(`${baseURL}/getall`, { params: { zip } }).then(data => {
      console.log(data);
      this.setState({ queriedZipCode: zip });
    });
  }

  changePath(path) {
    this.setState({ path });
  }

  returnToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    const { currentListing, searchResults, queriedZipCode } = this.state;
    return (
      <div>
        <Router>
          <Header search={this.landingSearch.bind(this)} changePath={this.changePath.bind(this)} path={this.state.path} />
          <Switch>
            <Route exact path="/">
              <LandingPage search={this.landingSearch.bind(this)} />
            </Route>
            <Route path="/features">
              <Features />
            </Route>
            <Route path="/results">
              <Results listings={searchResults} zip={queriedZipCode} api={baseURL} getSelectedListing={this.getSelectedListing.bind(this)} />
            </Route>
            <Route path="/post">
              <ListingForm />  
            </Route>
            <Route path="/listing">
              <Listing listing={currentListing} />
            </Route>
            <Route path="/preview">
              <PreviewPage />
            </Route>
          </Switch>
          <Footer returnToTop={this.returnToTop} />
        </Router>
      </div>
    );
  }
}
