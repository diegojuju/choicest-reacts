import logo from './logo.jpg';
import './App.css';
import { NavBar } from './components/NavBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo}  alt="logo" />
        <p>
         CHOICEST tu elección nos importa.
        </p>
      </header>
    </div>
  );
}

export default App;
