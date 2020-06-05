import React, { Component } from 'react'
import './index.css'
import { Redirect , Switch ,Route} from 'react-router-dom'

import categories from '../../pages/categories'
const {Todo,MyClass,Charts,Erp}=categories;

export default class index extends Component {
    render() {
        
        return (
            <div className="mycontent-div">   
                <div className="mycontent-main">
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
                </div>
            </div>
        )
    }
}
