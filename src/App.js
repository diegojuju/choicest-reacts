import logo from './logo.jpg';
import './App.css';
import  NavBar  from './components/NavBar';
import ItemListConteiner from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo}  alt="logo" />
        <p>
         CHOICEST tu elección nos importa.
        </p>
        <ItemListConteiner gretting= "Bienvenidos a CHOICEST" />
      </header>
    </div>
  );
}

export default App;
