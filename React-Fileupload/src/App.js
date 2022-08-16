import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserList } from './userlist';
import { AddStudent } from './addStudent';

function App() {
  return (
    <div className="App">  
     <Router>    
      <div className="container">    
        <nav className="btn btn-warning navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/Createuser'} className="nav-link">Add User</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/UserList'} className="nav-link">User List</Link>    
              </li>    
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>      
          <Route exact path='/UserList' component={UserList} /> 
          <Route exact path='/Createuser' component={AddStudent} />    
        </Switch>    
      </div>    
    </Router>    
    </div>  
  );
}

export default App;
