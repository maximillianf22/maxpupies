import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import './App.css';

// import { connect } from 'react-redux';

// import { Header } from './components/Header';
// import Product from './components/Product/Product';
// import Slider from './components/Slider/Slider';
// import { Footer } from './components/Footer/Footer';
import { MainScreen } from './components/MainScreen';
import Cart from './components/Cart/Cart';

// function App() {
//   return (
//     <>
//       <Header />
//       <Product />
//       <Slider />
//       <Footer />
//     </>
//   );
// }


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
