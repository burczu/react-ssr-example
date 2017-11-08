import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    initalText: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { text: this.props.initalText };
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
