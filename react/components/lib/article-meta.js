'use strict';

let React = require('react');

  export default function ArticleMeta(props) {
    const publicationUrl = 'https://medium.com/nav-coin'
    const text = 'Check out this article about #NavCoin on #Medium: ' + props.title
    return(
      <div className="blog-meta-wrapper" style={{marginTop: "30px"}}>
      <div className="read-more">
              <div className="themeix-button-group">
                <a href={`${publicationUrl}/${props.id}`} className="btn btn-purple" target="e">Read on Medium</a>
              </div>
          </div>
        <div className="social-icon-sect">
          <div className="share-icon">
              <span>share</span>
              <a className="social-icon twitter" href={`https://twitter.com/intent/tweet?text=${text}&url=${publicationUrl}/${props.id}&via=NavCoin&related=NavCoin`} rel="nofollow" target="_blank" title="Share on Twitter"><i className="fa fa-twitter"></i></a>
              <a className="social-icon facebook" href={`https://facebook.com/sharer.php?u=${publicationUrl}/${props.id}`} rel="nofollow" target="_blank" title="Share on Facebook"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
      </div>
      );
  }
  