'use strict';

let React = require('react');
import FormattedDate from './formatted-date';
import NewsTag from './news-tag';

export default function NewsItem(props) {
    const nbspTitle = props.item.title.replace(/ (?=[^ ]*$)/i, '&nbsp;')
    const linkSplit = props.item.link.split('?')
    const urlSegment = linkSplit[0].replace("https://medium.com/nav-coin/", "");
    const publicationUrl = 'https://medium.com/nav-coin'
    const defaultTags = ['navcoin', 'cryptocurrency', 'blockchain'];
    const contentEncoded = props.item['content:encoded'];
    const elm = document.createElement('div');
    elm.innerHTML = contentEncoded;
    const images = elm.getElementsByTagName("img");
    const paragraphs = elm.getElementsByTagName("p");

    let excerpt = paragraphs[0].innerHTML;
    if (excerpt.length < 150) {
        excerpt += ' ';
        excerpt += paragraphs[1].innerHTML;
    }    

return(
    <div className="news-item">
        <a href={'/article/?id='+urlSegment}>
            <div className="blog-image" style={{backgroundImage: `url(${images[0].src})`}}>
                <div className="item-overlay"></div>
            </div>
        </a>
        <div className="blog-details">
            <h3><a href={'/article/?id='+urlSegment} dangerouslySetInnerHTML={{__html: nbspTitle}}></a></h3>
            <ul className="blog-author-name">
                <li><i className="fa fa-user-circle-o"></i>{props.item.creator}</li>
                <li>
                    <i className="fa fa-calendar"></i>
                    <FormattedDate isoDate={props.item.isoDate} />
                </li>
            </ul>
            <ul className="blog-tags">
                <li className="hash"><i className="fa fa-hashtag"></i></li>
                {props.item.categories && props.item.categories.map((value, index) => {
                    return <li className="tag" key={index.toString()}><NewsTag tag={value} /></li>
                })} 
                {!props.item.categories && defaultTags.map((value, index) => {
                    return <li className="tag" key={index.toString()}><NewsTag tag={value} /></li>
                })}     
            </ul>
            <div className="blog-excerpt" dangerouslySetInnerHTML={{__html: excerpt}}></div>
            <div className="social-icon-sect">
                <div className="read-more">
                    <div className="themeix-button-group">
                        <a href={'/article/?id='+urlSegment} className="btn btn-purple">read more</a>
                    </div>
                </div>
                <div className="share-icon">
                    <span>share</span>
                    <a className="social-icon twitter" href={`https://twitter.com/intent/tweet?text=${props.item.title}&url=${publicationUrl}/${urlSegment}&via=NavCoin&related=NavCoin`} rel="nofollow" target="_blank" title="Share on Twitter"><i className="fa fa-twitter"></i></a>
                    <a className="social-icon facebook" href={`https://facebook.com/sharer.php?u=${publicationUrl}/${urlSegment}`} rel="nofollow" target="_blank" title="Share on Facebook"><i className="fa fa-facebook"></i></a>
                </div>
            </div>
        </div>
    </div>
    );
}
  