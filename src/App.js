import logo from './logo.svg';
import './App.css';
import Array from './component/Arrays.js'
import Nav from './component/Nav'
import LinkedList from "./component/LinkedList.js"

function App() {
  return (
    <div className="App">
      <Nav/>
     <Array/>
     <LinkedList></LinkedList> //Here for Testing LinkedList -James
    </div>
  );
}

export default App;
