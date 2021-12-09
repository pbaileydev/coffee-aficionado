import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import arabicacoffee from '../assets/arabicacoffee.jpg';
import ethiopiancoffee from '../assets/ethiopiancoffee.jpg';
import coffeebeans from '../assets/coffeebeans.jpeg';
class ListItems extends React.Component{
    
    render(){

        const items = [
            {
                name:"Arabica Beans",
                image: arabicacoffee
                
            },
            {
                name:"Ethiopian Beans",
                image: ethiopiancoffee
            },
            {
                name:"Colombian Beans",
                image: coffeebeans
                //mike kenneally unspash
            }
        ]
        return(
            <div>
                <h1 class="coffeeDiv">Coffee Beans</h1>
            <div id="coffeeRow">
            {items.map((item)=>{
                return(
                <ListItem coffee={item} />
                )
                })}
            </div>
            </div>
        )
    }
}
class ListItem extends Component{
    render(){
        const {name,image}= this.props.coffee
        const strippedW = name.replace(/\s+/g, '%20')

        const strippedT = name.replace(/\s+/g, '+')
        var urlW = "https://www.walmart.com/search/?query="+strippedW
        var urlT = "https://www.target.com/s?searchTerm="+strippedT
        return(
            <div>
            <div class="coffeeItems">
                
                <img src={image}></img>
                
            </div>
            <h2 class="nombre">{name}</h2>
            <button id="Walmart" onClick={()=>{window.location.href = urlW}} >Walmart</button>
                <button id="Target" onClick={()=>{window.location.href = urlT}} >Target</button>
            </div>
        )
    }
}
export default ListItems;
