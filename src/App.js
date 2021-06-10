import './App.css';
import AnimesTemporada from './components/AnimesTemporada';
import MenuTop from './components/MenuTop'
import Noticias from './components/Noticias';
import TopAnimes from './components/TopAnimes';
import FullPageAnime from './components/FullPageAnime';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



function App() {
  return (
    <div className="App container-fluid">
      <div className="row m-4">
        <MenuTop></MenuTop>
        <Router>
          <Switch>
            <Route path='/inicio'>
              <div className="bordeb col-9 me-4 mt-3 p-5">
                <Noticias></Noticias>
                <AnimesTemporada></AnimesTemporada>
              </div>
              <div className="col mt-3">
                <div className="bordeb">
                  <TopAnimes></TopAnimes>
                </div>
                <div className="bordeb mt-5">
                  <TopAnimes></TopAnimes>
                </div>
              </div>
            </Route>

            <Route path='/Anime:id'>
              ssssss
              <div className="bordeb col-8 me-4 mt-3">
                ssss
                <FullPageAnime></FullPageAnime>
              </div>
              <div className="col mt-3">
                <div className="bordeb">
                  <TopAnimes></TopAnimes>
                </div>
                <div className="bordeb mt-5">
                  <TopAnimes></TopAnimes>
                </div>
              </div>
            </Route>

          </Switch>

        </Router>
      </div>
    </div>
  );
}

export default App;
