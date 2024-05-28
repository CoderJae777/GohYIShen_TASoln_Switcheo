import './App.css';
import Home from './Home';
import Navbar from './Navbar';

// Json server
// http://localhost:8000/tokenPrice

function App() {
  return (
    <>
    <div className='NavBar'>
      <Navbar />
    </div>
    <div className="App">
      <Home />
    </div>
    </>
  );
}

export default App;
