import { Home } from './pages/home/Home'; //LandingPage
import { Login } from './pages/login/Login'
// import Register from './pages/register/Register'
import { User } from "./pages/user/User";//AppLayout
import { Empty } from "./pages/empty/Empty";
import { PrivateRoute } from "./PrivateRoute";//ProtectedRoute 

import {
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (

    <Switch>
      {/* <Route exact path="/">
          <Home />
        </Route> */}

      <Route exact path="/" component={Home} />

      <PrivateRoute exact path="/user" component={User} />

      {/* <PrivateRoute exact path="/user" component={User} /> */}

      {/* <Route path="/login">
        <Login />
      </Route> */}
      <Route exact path="/login" component={Login} />
      <Route path='*' component={Empty} />


      {/* <Route path="/register">
          <Register />
        </Route> */}

    </Switch>

  );
}

export default App;
