import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
import ContactUs from './components/contactUs/ContactUs';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/aboutUs' component={AboutUs}/>
          <Route path='/contactUs' component={ContactUs}/>
          <Route path='/' component={Home}/>
        </Switch> 
        <Footer/>       
      </Router>
    </div>
  );
}

export default App;
