import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Learnmore from '../pages/project/learnmore';
import Successform from '../pages/successform';

const Router = ()=>(
    <Switch>
        <Route exact path="/" compoenent={Home} />
        <Route exact path='/success_form' component={Successform} />
        <Route exact path='/learnmore/:postId' component={Learnmore} />
    

        <Route exact path='/learnmore' component={Learnmore} />
    </Switch>
)
export default Router