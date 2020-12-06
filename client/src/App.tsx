import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

const App = () => {

  return (
    <Switch>
      <Route exact path={'/signIn'} render={() => <SignIn/>}/>
      <Route exact path={'/signUp'} render={() => <SignUp/>}/>
      <Route exact path={'/task'} render={() => <div>Main</div>}/>
    </Switch>
  );
};

export default App;