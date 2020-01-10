import React from 'react';
import Header from './Header';
import './App.css'

function App() {
  let subscribers = [
    {
      name: "Shilpa",
      phone: "8888888888"
    },
    {
      name: "Srishti",
      phone: "9999999999"
    }
  ]
  return (
    <div>
      <Header />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        {
          subscribers.map(sub => {
            return (
              <div className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
