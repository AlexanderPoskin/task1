import React, { Component } from 'react';
import './Quotes.scss';

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      isLoading: false,
      error: null,
    };
  }

  handleClick = () => {
    this.setState({ isLoading: true });
    fetch('https://api.kanye.rest')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ quote: data.quote, isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  render() {
    const { quote, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="quotes-page">
        <form onSubmit={(e) => e.preventDefault()}>
          <button
            className="quotes-page__button"
            type="button"
            onClick={this.handleClick}
          >
            Load Quote
          </button>
        </form>
        <div>{quote}</div>
      </div>
    );
  }
}

export default Quotes;
