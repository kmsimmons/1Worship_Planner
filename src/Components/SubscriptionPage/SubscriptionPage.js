import React from 'react';
import './subscription_page.css'
import { Link } from 'react-router-dom'

export default function SubscriptionPage() {
  return (
    <div>
        <h1>Select Your Subscription</h1>
        <h2>Choose from preset plans</h2>
        <ul>
            <li>Free</li>
            <li>Small Church</li>
            <Link to='/payment'>Choose small!</Link>
            <li>Medium Church </li>
            <Link to='/payment'>Choose medium!</Link>
            <li>Large Church</li>
            <Link to='/payment'>Choose large!</Link>
        </ul>
        <div id="boxed">
            This text is enclosed in a box.
        </div>
    </div>
  );
}
