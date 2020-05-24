import React from 'react';

import {Button,message} from 'antd';
import {BrowserRouter,HashRouter,Switch,Route} from 'react-router-dom';//router是路由器 route是路由 switch切换
import './App.css';
import Login from './login/index';
import Admin from './admin/admin';

function App() {
  
  
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </HashRouter>
  );
}

export default App;
