import logo from './logo.jpg';
import './App.css';
import  NavBar  from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
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
        <ItemListContainer gretting= "Bienvenidos a CHOICEST" />
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
