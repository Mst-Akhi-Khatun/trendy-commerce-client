import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import AuthProvider from './context/AuthProvider';
import ExploreProducts from './components/ExploreProducts/ExploreProducts';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Authentication/PrivateRoute/PrivateRoute';
import OrderForm from './components/OrderForm/OrderForm';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/exploreProducts">
              <ExploreProducts></ExploreProducts>
            </Route>
            <PrivateRoute path="/order/:id">
              <OrderForm></OrderForm>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
