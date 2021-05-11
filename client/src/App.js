import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
import ContactUs from './components/contactUs/ContactUs';
import Showcase from './components/showcase/Showcase';
import Doc from './components/documentation/Doc';
// import NewNavbar from './components/newNavbar';
import Navbar from './components/newNavbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/showcase' component={Showcase}/>
          <Route path='/doc' component={Doc}/>
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
