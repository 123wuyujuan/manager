import React, { Component } from 'react'
import { Redirect, Switch, Route, HashRouter,BrowserRouter } from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav'
import Header from "../../components/header"
import MyContent from '../../components/content'
import './index.css'
import categories from '../categories'
import { Layout } from 'antd'

export default class Admin extends Component {

    render() {
        
        const user = memoryUtils.user;
        if (!user._id) {
            return <Redirect to='/login' />
        }
        const { Sider, Content, Footer } = Layout;
        const {
            Charts,
            Erp,
            MyClass,
            Todo,
            Home,

        } = categories;

        return (
            <Layout style={{ height: '100%' }}>
                <LeftNav />  
            <Layout>
                    <Header ></Header>
                    <MyContent >  
                        <Switch> 
                            <Route path='/mytodo/first' component={Todo} />    
                            <Route path='/mytodo/follow' component={Todo} /> 
                            <Route path='/mytodo/conversion' component={Todo} />         
                            <Route path='/myclass/mylessons' component={MyClass} />
                            <Route path='/myclass/stuinfo' component={MyClass} />
                            <Route path='/myconversion/chart' component={Charts} />
                            <Route path='/myerp/order' component={Erp} />                  
                            <Redirect to='/mytodo'/>
                        </Switch>   
                    </MyContent>
                    <Footer style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>重庆邮电大学 ©2020 Created by Wu</Footer>
                </Layout>

            </Layout>

        )
    }




} 