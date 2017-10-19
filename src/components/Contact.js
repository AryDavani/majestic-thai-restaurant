import React, {Component} from 'react';

export default class Contact extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="flex hor-flex center-flex">
        <div className="contact-box flex column center-flex hor-flex hours">
          <p className="time">Lunch</p>
          <p>Monday - Thursday 11:30 AM - 2:30 PM</p>
          <p>Friday, Saturday & Sunday 11:30 AM - 4 PM</p>
          <p>Dinner</p>
          <p>Monday - Thursday 5 pm - 10 pm</p>
          <p>Friday, Saturday & Sunday 5 pm - 10 pm</p>
          <p>Address: 209 N. Hollywood Blvd</p>
        </div>
      </div>
    )
  }
}
