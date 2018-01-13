import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchLocation from './SearchLocation.jsx';
import AddPrice from './AddPrice.jsx';
import Header from './navHeader.jsx';
import AddCategory from './AddCategory.jsx';
import axios from 'axios';
import EatView from './EatView.jsx';
import EatViewListEntry from './EatViewListEntry.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    console.log('index');
    super(props);
    this.state = {
      location: '',
      price: '',
      activities: [],
      sleep: [],
      eat: [{ name: 'The Alcove',
url : 'https://www.yelp.com/biz/the-alcove-sunnyside?adjust_creative=CaRD0iikgPprS3wUNzdG2A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CaRD0iikgPprS3wUNzdG2A'}],
      party:[],
      explore:[],
      hasResults: false,
    };
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.setActivities = this.setActivities.bind(this);
    this.go = this.go.bind(this);
    this.getExploreData = this.getExploreData.bind(this);
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

  go() {
    if (this.state.activities.includes('explore') && this.state.location !== '' && this.state.price !== '') {
      axios.post('http://localhost:3000/explore', {
        location: this.state.location,
        price: this.state.price,
      })
        .then(response => {
          this.getExploreData(response.data, 'explore');
          this.setState.hasResults = true;
        })
        .catch(error => {
          console.log('error..!!', error);
        });
    }

    if (this.state.activities.includes('sleep') && this.state.location !== '' && this.state.price !== '') {
      axios.post('http://localhost:3000/sleep', {
        location: this.state.location,
        price: this.state.price,
      })
        .then((response) => {
          console.log('successfull', response);
        })
        .catch((error) => {
          console.log('error..!!', error);
        });
    }

    if (this.state.activities.includes('eat') && this.state.location !== '' && this.state.price !== '') {
      axios.post('http://localhost:3000/eat', {
        location: this.state.location,
        price: this.state.price,
      })
        .then((response) => {
          console.log('successfull', response);
        })
        .catch((error) => {
          console.log('error..!!', error);
        });
    }

    if (this.state.activities.includes('party') && this.state.location !== '' && this.state.price !== '') {
      axios.post('http://localhost:3000/party', {
        location: this.state.location,
        price: this.state.price,
      })
        .then((response) => {
           console.log('successfull', response);
        })
        .catch((error) => {
          console.log('error..!!', error);
        });
    }
  }

  getExploreData(data) {
    this.setState({
      explore: data,
    }, () => { console.log('explore state', this.state.explore); });
  }

  renderResultsPage() {
    if (this.state.hasResults === true) {
      return (
        <div>
          Page has results!
        </div>
      );
    }
  }

  homePage() {
    return (
      <div>
      </div>
    )
  }
//       <Router>
//         <Route exact={true} path="/" component={App} />
//       </Router>

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={() => <SearchLocation changeLoc={this.onChangeLocation} />} />
          <Route exact={true} path="/" render={() => <AddPrice changeBudget={this.onChangePrice} />} />
          <Route exact={true} path="/" render={() => <AddCategory setActivities={this.setActivities} />} />
          <Route path="/eatview" render={ ()=> <EatView /> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//      <div>
//         <div>
//           <h1>Trip collab</h1>
//           <div>
//             {this.renderResultsPage()}
//             <SearchLocation changeLoc={this.onChangeLocation} />
//             <AddPrice changeBudget={this.onChangePrice} />
//             <AddCategory setActivities={this.setActivities} />
//           </div>
//         </div>
//         <div>
//           <button type="button" className="btn btn-primary mb-2" onClick={this.go} > GO </button>
//         </div>
//       </div>