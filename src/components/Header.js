import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

class Headerz extends Component{

    render(){
        return(
            <div id="header">
                <nav id = "menu"><Link to='/'>Home</Link><Link to='/ingredients'>Ideas</Link></nav>
                <h1>Coffee Aficionado at your service.</h1>
            </div>
        )
    }
}
export default Headerz;