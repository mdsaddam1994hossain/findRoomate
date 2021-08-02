import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css'; 
import FindRoomie from './components/FindRoomie/FindRoomie';
import Home from './components/Home';
import RoomatFinder from './components/RoomatFinder/RoomatFinder';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import FindMatch from './components/FindMatch/FindMatch';
import FindPerfect from './components/FindPerfect/FindPerfect';
import Login from './components/Login/Login';
import LatsGo from './components/LatsGoPage/LatsGo';
import Upcomming from './components/Upcomming/Upcomming';
import FindPerfect2 from './components/FindPerfect2/FindPerfect2';
import YourRoomie from './components/YourRoomie/YourRoomie';
import Favorites from './components/Favorites/Favorites';
import Favorites2 from './components/Favorites2/Favorites2';
import Favorites3 from './components/Favorites3/Favorites3';
import Test from './components/Test/Test';
import Details from './components/Details/Details';
import Details2 from './components/Details2/Details2';
import Details3 from './components/Details3/Details3';
import Layout from './components/Layout';



function App() {
  return (
    <div>



      <Router >
        <Switch >

         <Route path='/layout'>
            <Layout />
          </Route>

          <Route path='/details3'>
            <Details3 />
          </Route>
          <Route path='/details2'>
            <Details2 />
          </Route>
          <Route path='/details'>
            <Details />
          </Route>
          <Route path='/test'>
            <Test />
          </Route>
          <Route path='/favorites3'>
            <Favorites3 />
          </Route>
          <Route path='/favorites2'>
            <Favorites2 />
          </Route>
          <Route path='/favorites'>
            <Favorites />
          </Route>
          <Route path='/yourRoomie'>
            <YourRoomie />
          </Route>
          <Route path='/findPerfect2'>
            <FindPerfect2 />
          </Route>
          <Route path='/upcomming'>
            <Upcomming />
          </Route>
          <Route path='/latsGo'>
            <LatsGo />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/findPerfect'>
            <FindPerfect />
          </Route>
          <Route path='/findMatch'>
            <FindMatch />
          </Route>
          <Route path='/roomatFinder'>
            <RoomatFinder />
          </Route>
          <Route path='/'>
            <FindRoomie />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
