import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Main, SignUp, SignIn} from './pages'

const App = () => {

  return (
    <Switch>
      <Route exact path={'/signIn'} render={() => <SignIn/>}/>
      <Route exact path={'/signUp'} render={() => <SignUp/>}/>
      <Route exact path={'/'} render={() => <Main/>}/>
    </Switch>
  );
};

export default App;