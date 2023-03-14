import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Menu from "./components/menu";
import { UsuarioContexto } from './contexts/useContext';
import History from './pages/history';
import Home from './pages/home';
import Library from './pages/library';
import LikedVideos from './pages/liked_videos';
import Shorts from './pages/shorts';
import Subscriptions from './pages/subscriptions';
import WatchLater from './pages/watch_later';
import YourVideos from './pages/your_videos';

function App() {
  const { openMenu, setOpenMenu } = useContext(UsuarioContexto);

  return (
    <BrowserRouter>
      <div className="App">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div style={{ width: '100%', display: 'flex' }}>
          <Menu openMenu={openMenu} />
          <div style={{ width: '100%' }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shorts' element={<Shorts />}/>
              <Route path='/subscriptions' element={<Subscriptions />}/>
              <Route path='/library' element={<Library />}/>
              <Route path='/history' element={<History />}/>
              <Route path='/your-videos' element={<YourVideos />}/>
              <Route path='/watch-later' element={<WatchLater />}/>
              <Route path='/liked-videos' element={<LikedVideos />}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;