import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AdShow from './components/AdShow/AdShow';
import Header from './components/Header/Header';
function App() {
  return (
    <div>
      <Router>
        <Header> </Header>
        <Switch>
          <Route exact path="/">
            <AdShow></AdShow>
          </Route>
          <Route path="/home">
            <AdShow></AdShow>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
