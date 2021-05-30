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
import Search from './Components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [ expand, setExpand ] = useState(false)
  const [ search, setSearch ] = useState('')
 
  function handleSearch(e) {
    setSearch(e.target.value)
  }
  function handleExpand() {
    setExpand(true)
  }
  function closeSearch() {
    setExpand(false)
  }

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
              <a href='/' className='navbar-brand'><GrainOutlinedIcon /> WebApp</a>
              <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse flex-end' id='navbarNav'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/' onClick={closeSearch}>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/products' onClick={closeSearch}>Products</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/services' onClick={closeSearch}>Services</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/about' onClick={closeSearch}>About</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/contact' onClick={closeSearch} >Contact</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className={'nav-link searchBox '  + (expand && 'expand')} onClick={handleExpand} to='/search'>
                    
                          <TextField
                            className='searchIconBar'
                            id='searh'
                            size='small'
                            onChange={handleSearch}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position='start'>
                                  <SearchIcon/>
                                </InputAdornment>
                              ),
                            }}
                          />
                     </Link>
                  </li>
                </ul>
              </div>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path='/search'>
                <Search search={search} />
              </Route>
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
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </div>
  );
}

export default App;
