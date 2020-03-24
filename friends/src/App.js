import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Components/login"
import Friends from "./Components/friends"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from "./Components/privateRoute"

function App() {
  return (
   <Router>
     <div>
       <ul>
         <li>
           <Link to="/login">Login</Link>
         </li>
         <li>
           <Link to="/protected">Protected Page</Link>
         </li>
       </ul>
    <Switch>
      <PrivateRoute exact path="/protected" component={Friends} />
      <Route path="/login" component={Login}/>
      <Route component={Login}/>
    </Switch>
     </div>
   </Router>
  );
}

export default App;
