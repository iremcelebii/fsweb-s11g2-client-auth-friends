import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { PrivateRouteList } from "./components/PrivateRouteList";
import { PrivateRouteAdd } from "./components/PrivateRouteAdd";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App ">
      <div className=" px-4 py-3 flex justify-center gap-x-12  border-2 border-b-black font-black">
        <h1 className="my-auto ">FRIENDS DATABASE</h1>
        <nav className="text-sm flex justify-between  gap-x-2.5 text-white">
          <Link to="/login" className="bg-black py-4 px-2.5">
            LOGIN.
          </Link>
          <Link to="/friends" className="bg-black py-4 px-2.5">
            FRIENDLIST.
          </Link>
          <Link to="/friends/add" className="bg-black py-4 px-2.5">
            ADDFRIEND.
          </Link>
          <Link to="/logout" className="bg-black py-4 px-2.5">
            LOGOUT
          </Link>
        </nav>
      </div>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* eğer yetkisi varsa burayı görebilsin, yoksa login sayfasına yönlensin */}
          {/* localStorage bak, s11g2token varsa yetkisi vardır */}
          {/* <Route path="/friends/add">
            <h2>friends add</h2>
          </Route> */}
          <PrivateRouteAdd path="/friends/add" component={AddFriend} />
          <PrivateRouteList path="/friends" component={FriendsList} />
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
