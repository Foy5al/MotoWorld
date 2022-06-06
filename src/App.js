import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddServices from './components/AddServices/AddServices';
import Booking from './components/Booking/Booking/Booking';
import Header from './components/Headers/Header';
import Experts from './components/Home/Experts/Experts';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Login from './components/Login/Login/Login';
import ManageServices from './components/ManageServices/ManageServices';
import Notfound from './components/Notfound/Notfound';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Authprovider from './Context/Authprovider'

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivetRoute path='/addservice'>
              <AddServices></AddServices>
            </PrivetRoute>
            <PrivetRoute path='/manageservices'>
              <ManageServices />
            </PrivetRoute>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/experts'>
              <Experts></Experts>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <Login />
            </Route>


            <PrivetRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivetRoute>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>

          </Switch>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
