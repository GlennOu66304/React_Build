import { Home } from './pages/home/Home'; //LandingPage
import { Login } from './pages/login/Login'
import { Register } from './pages/register/Register'
import { User } from "./pages/user/User";//AppLayout
import { Empty } from "./pages/empty/Empty";
// import { PrivateRoute } from "./PrivateRoute";//ProtectedRoute 

import {
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (

    <Switch>


      <Route exact path="/" component={Home} />
      {/* <PrivateRoute exact path="/user" component={User} /> */}
      <Route exact path="/user" component={User} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path='*' component={Empty} />

    </Switch>

  );
}

export default App;
