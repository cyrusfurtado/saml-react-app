// import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import LoginForm from './Login';
import Home from './Home';
import AuthGuard from './Authguard';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const subroute = process.env.NODE_ENV !== 'development' ? process.env.REACT_APP_URL : '';

  console.log('REACT_APP_ENV', process.env.NODE_ENV, 'subroute', subroute);
  const [isAuthorized, setIsAuth] = useState(true);

  const [user, setUser] = useState('')
  const [session, setSession] = useState('')

  function getCookie(cookieName) {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
  
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  
    // If the cookie is not found, return null or handle it as needed
    return null;
  }

  useEffect(() => {
    const decodedCookie = decodeURIComponent(document.cookie);
    console.log("decodedCookie", decodedCookie);
    console.log("name-id", getCookie('name-id'));
    console.log("session-id", getCookie('session-id'));
    setUser(getCookie('name-id'));
    setSession(getCookie('session-id'));
    setTimeout(() => {
      console.log("App cookie", user, session);
    }, 1000)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cyclops UI!!!</h2>
        <BrowserRouter basename={subroute} >
          <Switch>
            <Route path="/landing" component={Landing} />
            {/* <Route path="/login" render={(props) => <LoginForm setIsAuth={setIsAuth} {...props} />} /> */}
            {/* <Route path="/dashboard" component={(routeProps) => <Home {...routeProps} user={user} session={session} />} /> */}
            {/* <AuthGuard
              path="/dashboard"
              MyComponent={Home}
              isAuthorized={isAuthorized}
              user={user}
              session={session}
            /> */}
            {/* <Redirect from="/" to="/landing" /> */}
            <Route path="/login">
              {session !== null ? <Redirect to="/dashboard" /> : <LoginForm /> }
            </Route>
            <Route path="/dashboard">
              {session !== null ? <Home user={user} session={session} /> : <Redirect to="/login" /> }
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
