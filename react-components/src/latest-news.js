'use strict';

let Parser = require('rss-parser');
let React = require('react');
let ReactDOM = require('react-dom');

class LatestNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {

    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

    let parser = new Parser();

    (async () => {
 
      let feed = await parser.parseURL(CORS_PROXY + 'https://medium.com/feed/nav-coin');
      console.log(feed);
      console.log('done');
     
    })();
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <div>Error: {error.message}</div>
      );
    } else if (!isLoaded) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div class="home-page-card-section homepage-news-section ninety-vw-container">
          <div class="title-container">
              <h2>Community News and Articles</h2>
              <a href="/news">See all news&nbsp;&nbsp;
                  <span class="fa fa-chevron-right"></span>
              </a>
          </div>
          <div class="card-container">
          </div>
        </div>
      );
    }
  }
}

const domContainer = document.querySelector('#react-latest-news');
ReactDOM.render(React.createElement(LatestNews), domContainer);