import history from './history'
import React,{Component} from 'react'
export default class Router extends Component{
  constructor(props){
      super(props)
  }
  render(){
   return(
     <Router history = {history}>
        {this.props.children}
     </Router>
    )
  }
}