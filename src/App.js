import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { PrivateRouteList } from "./components/PrivateRouteList";
import { PrivateRouteAdd } from "./components/PrivateRouteAdd";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">LOGIN.</Link>
        <Link to="/friends">FRIENDLIST.</Link>
        <Link to="/friends/add">ADDFRIEND.</Link>
      </nav>

      <div>
        <Switch>
          <Route path="/login">
            <div>
              <Login />
            </div>
          </Route>
          {/* eğer yetkisi varsa burayı görebilsin, yoksa login sayfasına yönlensin */}
          {/* localStorage bak, s11g2token varsa yetkisi vardır */}
          {/* <Route path="/friends/add">
            <h2>friends add</h2>
          </Route> */}
          <PrivateRouteAdd path="/friends/add" component={AddFriend} />
          <PrivateRouteList path="/friends" component={FriendsList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
