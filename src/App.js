import React, { Component } from 'react';
import Header from './Header';
import './App.css'

class App extends Component {
  // let subscribers = [
  //   {
  //     id: 1,
  //     name: "Shilpa",
  //     phone: "8888888888"
  //   },
  //   {
  //     id: 2,
  //     name: "Srishti",
  //     phone: "9999999999"
  //   }
  // ]

  constructor() {
    super();
    this.state = {
      subscribersListToShow: []
    }
  }
  render() {
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.state.subscribersListToShow.map(sub => {
              return (
                <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <button className="custom-btn delete-btn">Delete</button>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
