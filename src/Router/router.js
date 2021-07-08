import React from 'react';
import {Switch, Route } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home';
import Learnmore from '../pages/project/learnmore';

const Router = ()=>(
    <Switch>
        {/* pages */} 

        <Route exact path='/learnmore/:postId' component={Learnmore} />

        <Route exact path='/learnmore' component={Learnmore} />
    </Switch>
)
export default Router