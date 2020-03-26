import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//switch garante que a aplicação chame apenas 1 rota por vez 

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profiles'
import NewIncidents from './pages/NewIncidents';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Criação de Rotas */}
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncidents} />
      </Switch>
    </BrowserRouter>
  );
}