import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchLocation from './components/SearchLocation.jsx';
import AddPrice from './components/AddPrice.jsx';
import Header from './components/navHeader.jsx';
import AddCategory from './components/AddCategory.jsx';
import axios from 'axios';
import App from './components/app.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Index extends React.Component {
  constructor(props) {
    console.log('index');
    super(props);
    this.state = {
      location: '',
      price: '',
      activities: [],
    };
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.setActivities = this.setActivities.bind(this);
  }

  onChangeLocation(destination) {
    this.setState({
      location: destination,
    }, ()=>{console.log('Destination has been set!', this.state.location);});

  }

  onChangePrice(value) {
    this.setState({
      price: value,
    }, ()=>{console.log('Price has been set!', this.state.price);});

    this.setActivities = this.setActivities.bind(this);
  }

  setActivities(data) {
    this.setState({
      activities: data,
    });
  }

  // render() {
  //   // console.log('new state', this.state.activities);
  //   return (
  //     <div>
  //       <App />
  //     </div>
  //   );
  // }
}


ReactDOM.render(<App />, document.getElementById('app'));
