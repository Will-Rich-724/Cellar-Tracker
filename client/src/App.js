import './App.css';
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

import LogIn from "./Views/LogIn";
import Register from "./Views/Register"

function App() {
  return (
    <div className="App">
      <Router>
        <LogIn path='/' />
        <Register path='/register' />
      </Router>
    </div>
  );
}

export default App;
