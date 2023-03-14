import React, { useContext } from 'react';
import Header from "./components/header";
import Menu from "./components/menu";
import { UsuarioContexto } from './contexts/useContext';

function App() {
  const { openMenu, setOpenMenu } = useContext(UsuarioContexto);

  return (
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div style={{ width: '100%', display: 'flex' }}>
        <Menu openMenu={openMenu} />
        <div style={{ background: 'blue', width: '100%' }}>
          {/* rotas */}
        </div>
      </div>
    </div>
  );
}

export default App;
