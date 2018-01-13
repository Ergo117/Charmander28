import React from 'react';

class SearchLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSetDestination = this.onSetDestination.bind(this);
    this.handleReturnKey = this.handleReturnKey.bind(this);
  }

  // Renders the value entered into the search field
  handleInputChange(e) {
    this.setState({
      location: e.target.value,
    });
  }
  
  // Saves search field value upon pressing Enter/Return key
  handleReturnKey(e) {
    if (e.key === 'Enter') {
      this.props.changeLoc(this.state.location);
    }
  }

  // Not currently in use, standard click handler
  handleClick(e) {
    e.preventDefault();
    this.props.searchLocation(this.target.name);
  }

  // Passes Search data back to parent if user is no longer in the search field
  onSetDestination() {
    this.props.changeLoc(this.state.location);
  }

  render() {
    return (
      <div className="search-bar destination">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          placeholder="What's your destination"
          onChange={this.handleInputChange}
          onKeyPress={this.handleReturnKey}
          onBlur={this.onSetDestination}
        />
      </div>
    );
  }
}

export default SearchLocation;
