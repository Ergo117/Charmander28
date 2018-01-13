import React from 'react';
//import Gallery from 'react-grid-gallery';
import EatViewListEntry from './EatViewListEntry.jsx';

let EatView = (props) => {

  return (
    <div>
    {console.log('this data', this.props)}
      {props.eat.map(item =>
        <EatViewListEntry key={props.eat.indexOf(item)} item={item} />
      )}
    </div>
  );
};


export default EatView;

