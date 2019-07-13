'use strict';

let Parser = require('rss-parser');
let React = require('react');
let ReactDOM = require('react-dom');
import NewsItem  from './lib/news-item';

class News extends React.Component {
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
      console.log(feed);
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
        <div className="ninety-vw-container">
          <div className="status-container no-flex small">
            <h3>Something went wrong</h3>
            <p>We were unable to fetch the latest stories from medium, you can try viewing them directly on the NavCoin Collective publication on Medium.</p>
            <a href="https://medium.com/nav-coin">NavCoin Collective &nbsp;&nbsp;
              <span className="fa fa-chevron-right"></span>
            </a>
          </div>
      </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="ninety-vw-container">
          <div className="status-container small">
            <h3>Loading...</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ninety-vw-container">
            <div className="ninety-vw-container grid-container two-col">
              {items.map((value, index) => {
                  return <NewsItem key={index.toString()} item={value} />
              })}            
          </div>
        </div>
      );
    }
  }
}

const domContainer = document.querySelector('#react-news');
ReactDOM.render(React.createElement(News), domContainer);