'use strict';

let Parser = require('rss-parser');
let React = require('react');
let ReactDOM = require('react-dom');
import NewsCard  from './lib/news-card';

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

    const latestNews = this;

    parser.parseURL(CORS_PROXY + 'https://medium.com/feed/nav-coin', function(err, feed) {
      if (err) {
        console.error(err);
        return latestNews.setState({
          error: true
        });
      }
      latestNews.setState({
        isLoaded: true,
        items: feed.items,
      });
    })

  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <div className="status-container no-flex">
          <h3>Something went wrong</h3>
          <p>We were unable to fetch the latest stories from medium, you can try viewing them directly on the NavCoin Collective publication on Medium.</p>
          <a href="https://medium.com/nav-coin">NavCoin Collective &nbsp;&nbsp;
                <span className="fa fa-chevron-right"></span>
            </a>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="status-container">
          <h3>Loading...</h3>
        </div>
      );
    } else {
      return (
        <div className="card-container">
          {items.map((value, index) => {
            if (index < 8) {
              return <NewsCard key={index.toString()} item={value} />
            }
          })}            
        </div>
      );
    }
  }
}

const domContainer = document.querySelector('#react-latest-news');
ReactDOM.render(React.createElement(LatestNews), domContainer);