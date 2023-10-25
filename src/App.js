// import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Landing from './Landing';
import LoginForm from './Login';
import Home from './Home';
import AuthGuard from './Authguard';

function App() {
  const subroute = process.env.NODE_ENV !== 'development' ? process.env.REACT_APP_URL : '';

  console.log('REACT_APP_ENV', process.env.NODE_ENV, 'subroute', subroute);
  const [isAuthorized, setIsAuth] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter basename={subroute} >
          <Switch>
            {/* <Route path="/landing" component={Landing} /> */}
            <Route path="/login" render={(props) => <LoginForm setIsAuth={setIsAuth} {...props} />} />
            {/* <Route path="/dashboard" component={Home} /> */}
            <AuthGuard
              path="/dashboard"
              MyComponent={Home}
              isAuthorized={isAuthorized}
            />
            {/* <Redirect from="/" to="/landing" /> */}
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
