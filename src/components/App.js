import React from 'react';
import PropTypes from 'prop-types';
import isNode from 'is-node';

class App extends React.Component {
  static propTypes = {
    initalText: PropTypes.string
  }

  constructor(props) {
    super(props);
    if (isNode) {
      this.state = { text: this.props.initalText };
    }
  }

  onButtonClick(event) {
    event.preventDefault();

    this.setState({ text: 'changed in the browser!' });
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.onButtonClick.bind(this)}>change text!</button>
      </div>
    );
  }
}

export default App;
