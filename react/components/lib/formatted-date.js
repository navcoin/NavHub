'use strict';

let React = require('react');

  export default function FormattedDate(props) {
      const date = new Date(props.isoDate);
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    return(
        <span>{formattedDate}</span>
      );
  }
  