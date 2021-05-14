import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
import ContactUs from './components/contactUs/ContactUs';
import Showcase from './components/showcase/Showcase';
import Doc from './components/documentation/Doc';
// import Navbar from './components/newNavbar';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import GithubAuth from './components/auth/GithubAuth';
import CreateWeb from './components/createWeb/OldCreateWeb';


function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/github-auth' component={GithubAuth}/>
          <Route path='/create-website' component={CreateWeb}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/showcase' component={Showcase}/>
          <Route path='/doc' component={Doc}/>
          <Route path='/aboutUs' component={AboutUs}/>
          <Route path='/contactUs' component={ContactUs}/>
          <Route path='/' component={Home}/>
        </Switch> 
        <Footer/>       
      </Router>
  );
}

export default App;
