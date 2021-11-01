import logo from './logo.svg';
import './App.css';
import SampleComponent from './components/SampleComponent';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Project Mini- Mek</h2>
      <SampleComponent/>
    </div>
  );
}

export default App;
