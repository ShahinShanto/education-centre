import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUS from './components/AboutUS/AboutUS';
import Blog from './components/Blog/Blog';
import FeatureCourse from './components/FeatureCourse/FeatureCourse';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
function App() {
  return (
    <div>
      <Router>
        <Header> </Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <FeatureCourse></FeatureCourse>
          </Route>
          <Route path="/aboutus">
            <AboutUS></AboutUS>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer> </Footer>
      </Router>
    </div>
  );
}

export default App;
