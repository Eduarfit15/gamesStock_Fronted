import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/catalog.css';
import './styles/cart.css';
import './styles/loginUser.css';
import './styles/dashboard.css';
import './styles/miProfileStyles.css';

import { BrowserRouter } from 'react-router-dom';
import { GameStockApp } from './GameStockApp';
import { DashBoardProvider } from './auth/context/DashBoardProvider';




ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>

    <BrowserRouter>
    <DashBoardProvider>
          <GameStockApp/>

    </DashBoardProvider>

    </BrowserRouter>
       
  </React.StrictMode>
)
