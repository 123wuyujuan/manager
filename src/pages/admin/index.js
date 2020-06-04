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
                <Sider style={{ color: 'white' }}>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header ></Header>
                    <MyContent >  
                        <Switch>   
                            <Route path='/home' component={Home}/>                
                            <Route path='/myclass' component={MyClass} />
                            <Route path='/mycharts' component={Charts} />
                            <Route path='/myerp' component={Erp} />
                            <Route path='/mytodo' component={Todo} />                         
                            <Redirect to='/home' />
                        </Switch>   
                    </MyContent>
                    <Footer style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>重庆邮电大学 ©2020 Created by Wu</Footer>
                </Layout>

            </Layout>

        )
    }




} 