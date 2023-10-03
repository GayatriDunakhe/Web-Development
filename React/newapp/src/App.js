import logo from './logo1.png';
import './App.css';
import Login from './components/Login';
import Counter from './components/counter'
import Toggelbtn from './components/toggelbtn'
import Tempconv from './components/tempconverter'
import Timer from './components/timer'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Gayatri</h1>
        
      </header> */}

      {/* <h1>Dogs</h1> */}
      {/* <Login /> */}
      {/* <Counter /> */}
      {/* <Toggelbtn /> */}
      {/* <Tempconv /> */}
      <Timer/>
    </div>
  );
}

export default App;
