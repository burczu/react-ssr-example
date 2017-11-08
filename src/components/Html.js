import React from 'react';

class Html extends React.Component {
  render () {
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>Server Side Rendered React App!!</title>
        </head>
        <body>
          <div id="app"
               dangerouslySetInnerHTML={{ __html: this.props.children }}
          ></div>
          {this.props.scripts.map((item, index) => {
            return <script key={index} src={item}></script>;
          })}
        </body>
      </html>
    );
  }
}

export default Html;
