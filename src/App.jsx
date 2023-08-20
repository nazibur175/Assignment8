import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/Components/Header/Header'
import Home from './assets/Components/Home/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
       <div className="home">
        <div className="">
          <Home></Home>
        </div>
       
       </div>
    </div>
  );
};

export default App;
