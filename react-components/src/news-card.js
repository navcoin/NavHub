'use strict';

let React = require('react');
import FormattedDate from './formatted-date';

export default function NewsCard(props) {
    const nbspTitle = props.item.title.replace(/ (?=[^ ]*$)/i, '&nbsp;')
    const linkSplit = props.item.link.split('?')
    const urlSegment = linkSplit[0].replace("https://medium.com/nav-coin/", "");
return(
    <div className="homepage-news-card">
        <a href={'/news/' + urlSegment}>
        <div className="title-container">
            <h1 dangerouslySetInnerHTML={{__html: nbspTitle}}></h1>
        </div>
        <div className="lower-section">
            <div className="project-author">
            <span className="fa fa-user-circle-o" style={{color: "#7D5AB5"}}></span>
            {`${props.item.creator}`}
            </div>
            <div className="project-date">
                <span className="fa fa-calendar" style={{color: "#7D5AB5"}}></span>
                <FormattedDate isoDate={props.item.isoDate} />
            </div>
        </div>
        </a>
    </div>
    );
}
  