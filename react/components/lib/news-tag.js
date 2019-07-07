'use strict';

let React = require('react');

  export default function NewsTag(props) {
    var dashedTag = props.tag.replace('-', '&#8209;')
    return(
        <a className="news-tag" 
          href={'https://medium.com/tag/' + props.tag}
          dangerouslySetInnerHTML={{__html: dashedTag}}></a>
      );
  }
  