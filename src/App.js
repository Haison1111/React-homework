// import logo from './logo.svg';
import './App.css';
import Input from './input';
import Todolist from './todolist';
import {Count} from "./todolist"



const Listcount = () => {
  return (
      <div className="listcount">
          {Count}
      </div>
  )
}


function App() {
  return (
    <div className="App">
      <Input/>
      <Todolist item ="Clean up bedroom"/>
      <Todolist item ="Buy some milk"/>
      <Todolist item ="Jogging"/>
      <Todolist item ="Learn React"/>
      <Todolist item ="Doing Exercises"/>
      <Listcount/>
    </div>
  );
}

export default App;
