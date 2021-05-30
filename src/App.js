import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import GrainOutlinedIcon from '@material-ui/icons/GrainOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Home from './Components/Home';
import Products from './Components/Products';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  function Footer() {
    return <p className='footer'>© Copyright 2021 <span>+61 444 333 222</span></p>;
  }

  
  return (
    <div className='App'>
      <div className='background'>
        <div className='MainFrame'>
          
        <Router>
          <div>
            <nav className='navbar navbar-expand-md navbar-light'>
              <a href='/' className='navbar-brand'><GrainOutlinedIcon /> New App</a>
              <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse flex-end' id='navbarNav'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/'>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/products'>Products</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/services'>Services</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/about'>About</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                  </li>
                  <li className='nav-item'>
                    <a href='#' className='nav-link search'><SearchIcon/></a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/services'>
                <Services />
              </Route>
              <Route path='/products'>
                <Products />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
