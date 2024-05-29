import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

// Json server
// http://localhost:8000/tokenPrice

function App() {
  return (
    <Router>
      <div className='NavBar'>
        <Navbar />
      </div>
      <div className="App">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
