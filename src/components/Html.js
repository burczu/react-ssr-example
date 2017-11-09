import React from 'react';
import PropTypes from 'prop-types';

class Html extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    initialState: PropTypes.object,
    scripts: PropTypes.array
  }

  render () {
    const { children, initialState, scripts } = this.props;

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>Server Side Rendered React App!!</title>
        </head>
        <body>
          <div id="app"
               dangerouslySetInnerHTML={{ __html: children }}
          ></div>
          {initialState && (
            <script
              dangerouslySetInnerHTML={{
                __html: `window.APP_STATE=${JSON.stringify(initialState)}`
              }}
            ></script>
          )}
          {scripts.map((item, index) => {
            return <script key={index} src={item}></script>;
          })}
        </body>
      </html>
    );
  }
}

export default Html;
