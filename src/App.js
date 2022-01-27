import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import CategoriesTitle from "./components/CategoriesTitle";
import ItemListContainer from './components/containers/ItemListContainer';
import CartContextProvider from './context/CartContext';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import Contact from "./components/Contact/Contact";
import Page404 from "./components/404/Page404";

function App() {
	
	const greeting = 'Bienvenidos a CHOICEST'

  return (    
		<CartContextProvider>
			<Router>
				<Container className="App" fluid> 
					<NavBar/> 
					<Header/>
					<Switch>
						<Route exact path="/">
							<ItemListContainer greeting={greeting}/>   	
						</Route>
						<Route exact path="/categories/:idCategory">
							<CategoriesTitle/>
							<ItemListContainer/>
						</Route>
						<Route exact path="/item/:idItem" component ={ItemDetailContainer}/>				
						<Route exact path="/cart" component={Cart}/>						
						<Route exact path="/contact" component={Contact}/>
						<Route exact path="/404" component={Page404} />
                        <Redirect to='/404' />
					</Switch>       
				</Container>    
			</Router>		
		</CartContextProvider>		
    );  
}
export default App 