import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'redendered on the server!' };
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
