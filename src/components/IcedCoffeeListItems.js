import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import icedcoffeeFirst from '../assets/icedcoffeenathandumalounsplash.jpeg';

import coffeecup from '../assets/coffeecup.jpg';
import tea from '../assets/tea.jpeg';
class IcedCoffeeListItems extends React.Component{
    state = { show: 'no'};
    displayCredits = () => {
        if(this.state.show == 'no'){
        this.setState({show:'yes'});
        }
        else{
            this.setState({show:'no'});
        }
      }
    
    render(){
        const {visible} = this.state;
        const items = [
            {
                name:"Hot Coffee",
                image: coffeecup,
                //Photo by Emre on Unsplash
                
            },
            {
                name:"Iced Coffee",
                image: icedcoffeeFirst,
                //Photo by Nathan Dumlao on Unsplash
            },
            {
                name:"Tea",
               image: tea
               //Photo by Blake Wisz on Unsplash
            }
        ]
        return(
            <div>
                <h1 class="coffeeDiv">Beverages</h1>
            <div id="coffeeRow">
            {items.map((item)=>{
                return(
                <IcedCoffeeListItem coffee={item} />
                )
                })}
            </div>
        
            <div class="credits">
                
                <h2>Photo Credits</h2>
                <div>    
                <p>Arabica Beans: Photo by EnjoyJava on EnjoyJava.com </p>
                <p>Ethiopian Beans: Photo by Alibaba on Alibaba.com</p>
                <p>Colombian Beans: Photo by Mike Kenneally on Unsplash</p>
                <p>Tea: Photo by Blake Wisz on Unsplash</p>
                <p>Hot Coffee: Photo by Emre on Unsplash</p>
                <p>Iced Coffee: Photo by Nathan Dumalao on Unsplash</p>
                <p>Tea: Photo by Blake Wisz on Unsplash</p>
                </div>
            </div>
            </div>
        )
    }
}

class IcedCoffeeListItem extends Component{
    
    render(){
        const {name,image}= this.props.coffee
        const stripped = name.replace(/\s+/g, '+')
        var urlW = "https://www.walmart.com/search/?query="+stripped
        var urlT = "https://www.target.com/s?searchTerm="+name
        return(
            <div>
            <div class="coffeeItems">
                <img src={image}/>
                </div>
                <h2>{name}</h2>
                <button id="Walmart" onClick={()=>{window.location.href = urlW}} >Walmart</button>
                <button id="Target" onClick={()=>{window.location.href = urlT}} >Target</button>
            </div>
        
        )
    }
    
}

export default IcedCoffeeListItems;
