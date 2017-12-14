import React from 'react';
import { 
    BrowserRouter as Router, 
    Route,
    Link
} from 'react-router-dom';

import App from './App.jsx';
import Main from './Main/Main.jsx';


const AppRouter = () => (
    <Router>
    <div className=''>
    <h1>kek</h1>
      <ul className="nav justify-content-center">
        <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/main">Main</Link></li>
      </ul>

      <div><Route exact path="/" component={App}/>
      <Route path="/main" component={Main}/>
      </div>
    </div>
  </Router>
)   

export default AppRouter;