import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { UserAdd, UserDetail, UserList, UserLogin, UserModify, UserRemove } from 'features/user/index'
import { Home, Navigation } from "features/common/index";


function App() {
  return (
    <>
  <Navigation/>
    <Switch>
      <Route exact path='/' component= { Home }/>
      <Redirect from='/home' to= { '/' }/>
      <Route exact path='/course-register' component= { UserAdd }/>
      <Route exact path='/online-profile' component= { UserDetail }/>
      <Route exact path='/login' component= { UserList }/>
      <Route exact path='/join' component= { UserLogin }/>
      <Route exact path='/school-status' component= { UserModify }/>
      <Route exact path='/school-status' component= { UserRemove }/>
    </Switch></>
  );
}

export default App;