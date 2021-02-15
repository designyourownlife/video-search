import React, { Component } from 'react'

export class SearchBar extends Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault();
    
    // callback from parent component
    this.props.onTermSubmit(this.state.term);
  }

  render() {
    const {term} = this.state;
    
    return (
      <div className="searchBar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="queryStr">Video Search</label>
            <input 
              type="text" 
              id="queryStr" 
              value={term}
              placeholder="enter keyword …"
              onChange={this.onInputChange} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
