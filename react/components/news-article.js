'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
import ArticleMeta from './lib/article-meta'

class NewsArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const newsArticle = this;
    const urlParams = new URLSearchParams(window.location.search);

    const articleId = urlParams.get('id');
    console.log(articleId)

    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

    fetch(CORS_PROXY + 'https://medium.com/nav-coin/' + articleId)
    .then(res => res.text())
    .then(result => {

      const body = this.getBody(result);

      const elm = document.createElement('div');
      elm.innerHTML = body;

      const articles = elm.getElementsByTagName("article");

      const headers = elm.getElementsByTagName("h1");

      const highResImages = articles[0].innerHTML.replace(/\/max\/[0-9]+\//g, '/max/700/');

      const publication = highResImages.replace(/href="\/nav-coin/g, 'href="https://medium.com/nav-coin')
      const author = publication.replace(/href="\/@/g, 'href="https://medium.com/@')

      const footerIndex = author.search(/<p[\w\s"=]+>— — —<\/p>/)
      
      let article = ""
      if (footerIndex !== -1) {
        article = author.substr(0, footerIndex) + '</div></section></div>'
      } else {
        article = author
      }

      newsArticle.setState({
        isLoaded: true,
        article: article,
        id: articleId,
        title: headers[0].innerHTML
      });
    })

  }

  getBody(content) { 
    var x = content.indexOf("<body");
    x = content.indexOf(">", x);    
    var y = content.lastIndexOf("</body>"); 
    return content.slice(x + 1, y);
  } 

  render() {
    const { error, isLoaded, article, id, title } = this.state;
    if (error) {
      return (
        <div className="ninety-vw-container">
          <div className="status-container">
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
          <div className="status-container">
            <h3>Loading...</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div dangerouslySetInnerHTML={{__html: article}}></div>
          <ArticleMeta article={article} id={id} title={title} />
        </div>
      );
    }
  }
}

const domContainer = document.querySelector('#react-news-article');
ReactDOM.render(React.createElement(NewsArticle), domContainer);