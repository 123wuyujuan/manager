import  React,{ Component } from "react";

import {Layout} from 'antd'
import './index.css'; 

export default class Header extends Component{
    render(){
        const {Header} = Layout;
        return( 
            <div className='header-div'>
                <Header className='header' style={{backgroundColor:'white'}}>
                    header
                </Header>
            </div>
        )
    }
}