
import './App.css';
import Headerz from './components/Header';
import IcedCoffeeListItems from './components/IcedCoffeeListItems';
import ListItems from './components/ListItems'
function App() {
  return (
    <div className="App">
      <Headerz/>
      <ListItems/>
      <IcedCoffeeListItems/>
    </div>
  );
}

export default App;
