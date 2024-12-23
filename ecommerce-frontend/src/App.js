import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route path="/product/:id" component={ProductDetail} />
      </Switch>
    </Router>
  );
};

export default App;
