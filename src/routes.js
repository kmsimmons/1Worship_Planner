import React from 'react'
import {Switch, Route} from 'react-router-dom';
//Components
import LandingPage from './Components/LandingPage/LandingPage';
import BrainTree from './Components/BrainTree/BrainTree';
import SubscriptionPage from './Components/SubscriptionPage/SubscriptionPage'

export default <Switch>
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/payment' component={BrainTree} />
      <Route exact path='/subscription_page' component={SubscriptionPage} />
    </div>
</Switch>
