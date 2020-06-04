import React from 'react';
import {Button,message} from 'antd';
import {BrowserRouter,HashRouter,Switch,Route} from 'react-router-dom';//router是路由器 route是路由 switch切换
import './App.css';
import Login from './pages/login/login';
import Admin from './pages/admin/index';

function App() {
  
  
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/login" component={Login} />
        <Route path="/" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
