import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import WalletModal from "./components/WalletModal";
import Header from './components/Header';
import { BalanceStore } from "./store/BalanceStore";
import { WalletStore } from "./store/WalletStore";
import { TxTrackerStore } from "./store/TxTrackerStore";
import { DataManager } from "./components/DataManager";


import * as dotenv from "dotenv";
import { routes } from './routes';
import { ModalStore } from './store/ModalStore';

import Home from './components/views/Home';
import './App.css';


let item = localStorage.getItem('token');


dotenv.config();


function App() {
  return (
    <BalanceStore>
      <WalletStore>
       <ModalStore>
        <TxTrackerStore>
            <DataManager>
              <div className="App">
                <Header/>
                <WalletModal />
                <Router>
                  <Switch>
                  {
                    item ? <Redirect exact from='/' to='/marketplace'/> : <Route exact  path='/' component={Home}></Route>
                  }
                  { 
                    routes.map(route => (
                        <Route {...route} /> 
                    ))
                  }
                  </Switch>
                </Router>
              </div>
            </DataManager>
          </TxTrackerStore>
       </ModalStore>
      </WalletStore>
    </BalanceStore>
  );
}

export default App;
