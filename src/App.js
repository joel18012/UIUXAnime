import './App.css';
import AnimesTemporada from './components/AnimesTemporada';
import Busqueda from './components/Busqueda';
import MenuTop from './components/MenuTop'
import Noticias from './components/Noticias';
import TopAnimes from './components/TopAnimes';
import TopAnimesTemp from './components/TopAnimesTemp';
import FullPageAnime from './components/FullPageAnime';
import FullPageRight from './components/FullPageRight';
import FullPageInfo from './components/FullPageInfo';

import UserList from './components/UserList';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
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
                <TopAnimesTemp></TopAnimesTemp>
                </div>
              </div>
            </Route>

            <Route path='/buscar/:nombre'>
              <div className="bordeb col-9 me-4 mt-3 p-5">
                <Busqueda></Busqueda>
              </div>
              <div className="col mt-3">
                <div className="bordeb">
                  <TopAnimes></TopAnimes>
                </div>
                <div className="bordeb mt-5">
                <TopAnimesTemp></TopAnimesTemp>
                </div>
              </div>
            </Route>

            <Route path='/Anime/:id'>
              <div className="bordeb col-8 me-4 mt-3">
                <FullPageAnime></FullPageAnime>
              </div>
              <div className="col mt-3">
                <div className="bordeb">
                  <FullPageRight></FullPageRight>
                </div>
                <div className="bordeb mt-5">
                  <FullPageInfo></FullPageInfo>
                </div>
              </div>
            </Route>

            <Route path='/MiLista'>
              <div className="bordeb col-8 me-4 mt-3">
                <UserList></UserList>
              </div>
              <div className="col mt-3">
                <div className="bordeb">
                  <TopAnimes></TopAnimes>
                </div>
                <div className="bordeb mt-5">
                  <TopAnimesTemp></TopAnimesTemp>
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
