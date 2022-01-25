import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import CategoriesTitle from "./components/CategoriesTitle";
import ItemListContainer from './components/containers/ItemListContainer';

import ItemDetailContainer from './components/containers/ItemDetailContainer';

import Page404 from "./components/404/Page404";

function App() {
	
	const greeting = 'Bienvenidos a CHOICEST'

    return (    

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
               <Route exact path="/" component={ItemListContainer}></Route>
							<ItemListContainer/>
						</Route>
						<Route exact path="/products/:id" component ={ItemDetailContainer}/>								
						<Route exact path="/404" component={Page404} />
                        <Redirect to='/404' />
					</Switch>       
				</Container>    
			</Router>		
    );  
}
export default App 