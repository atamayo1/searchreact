import React, { Component } from "react";
import "./index.css";
import axios from "axios";

export default class MovieList extends Component {
  state = {
    item: "",
    years: [],
    status: null
  }

  yearFind = (event) => {
    this.setState({item : event.target.value});
    console.log("yearItem", event.target.value);
  };


  componentDidMount() {
  }

  yearSubmit = (event) => {
    console.log('yearSubmit', event.target);
    axios.get('https://jsonmock.hackerrank.com/api/movies?Year='+this.state.item).then((res) => {
      console.log('resp-years', res);
      this.setState({years : res.data.data, status: "success"});
    }).catch(err => {console.log('err', err);});
  }
  render() {
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" onChange={this.yearFind} />
          <button className="" data-testid="submit-button" onClick={this.yearSubmit}>Search</button>
        </section>
        {this.state.years.length>0?
            this.state.years.map((year, key) => (
                <ul className="mt-50 styled" data-testid="movieList" key={key}>
                  <li className="slide-up-fade-in py-10">{year.Title}</li>
                </ul>
            )):<div data-testid="no-result">No Results Found</div>}
        <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
      </div>
    );
  }
}
