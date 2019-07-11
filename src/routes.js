import React from 'react'
import {Switch, Route} from 'react-router-dom';
//Components
import LandingPage from './Components/LandingPage/LandingPage';
import BrainTree from './Components/BrainTree/BrainTree';

export default <Switch>
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/payment' component={BrainTree} />
    </div>
</Switch>
