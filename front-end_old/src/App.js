import React from 'react';
import { BackTracking, BruteForce, DivideAndConquer, DynamicAndProgramming, Greedy } from "features/algorithms";
import { Home, Navi } from 'common';
import { Linear, Mathematics, NonLinear } from 'features/datastructure';
import { UserList, UserJoin } from 'features/user'
import { Todo } from 'features/todos';
import { Counter } from 'features/counter';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>
      <Navi />
      <Switch>
        <Route exact path='/' component={Home} />
        <Redirect from='/home' to={'/'} />
        <Route exact path='/counter' component={Counter} />
        <Route exact path='/todo' component={Todo} />
        <Route exact path='/userlist' component={UserList} />
        <Route exact path='/userjoin' component={UserJoin} />
        <Route exact path='/backtracking' component={BackTracking} />
        <Route exact path='/bruteforce' component={BruteForce} />
        <Route exact path='/divide' component={DivideAndConquer} />
        <Route exact path='/dynamic' component={DynamicAndProgramming} />
        <Route exact path='/greedy' component={Greedy} />
        <Route exact path='/linear' component={Linear} />
        <Route exact path='/math' component={Mathematics} />
        <Route exact path='/nonlinear' component={NonLinear} />
      </Switch>
    </Provider>
  )

}

export default App;