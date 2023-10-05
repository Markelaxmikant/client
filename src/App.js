import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Component/common/header/Header';
import Home from './Component/home/Home';
import About from './Component/about/About';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
   <>
   <Router>
    <Header/>
    <Switch>
      <Route path='/' exact component ={Home}/>
      <Route path='/about' exact component ={About}/>

    
    </Switch>
   </Router>
   </>
  );
}

export default App;
