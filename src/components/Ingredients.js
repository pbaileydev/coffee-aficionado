import React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import Headerz from './Header'

class Ingredients extends Component{
state = {cafe:[]}

componentDidMount(){
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response=>
        response.json()).then(json=>{
            console.log(json[0]['title'])
           this.setState({cafe:json})})
           
}
     render(){
         return(
    <div>
        <Headerz/>
        
                <Ingredient ingredientsItems={this.state.cafe}/>
            
    </div>
                
        
         )}
         
}
class Ingredient extends Component{

    render(){
        
        return(
        <div class="ingredientsGrid">

            <h2>Want to get some inspiration for your next caffeinated bevearage?</h2>
            <h2>Check out some of the awesome bevearges below</h2>

            {this.props.ingredientsItems.map(element => {
                if(element['id'] == 21 ){
                    return (<br></br>)
                }
                else{
                return(
                <div class="ingredientsBox">
                    <h2>{element['title']}</h2>
                    <h4>{element['description']}</h4>
                    <div class = "ingredients">
                        <p>Ingredients: &nbsp;</p> {element['ingredients'].map(i =>{
                        return(<p>{i} &nbsp;</p>)
                    })}</div>
                </div>    
                )
                }
            })}
         </div>
        )
    }
}

export default Ingredients;