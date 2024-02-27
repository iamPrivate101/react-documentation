
import './App.css'
import { useState } from "react";
import ButtonCount from './component/ButtonCount';
import MyButton from './component/MyButton';

function App() {
  const products = [
    {title : "cabbage", is_fruit:false, id:1 },
    {title : "Radish", is_fruit:false, id:2 },
    {title : "Mango", is_fruit:true, id:3 },
  ]

  const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

  const listitems = products.map(product => <li style={{color:product.is_fruit ? 'magenta' : 'darkgreen'}} key={product.id} >{product.title}</li> );

  return (
    <>
    <ul>
      {listitems}
    </ul>
    <MyButton></MyButton>

    <ButtonCount count={count} onClick={handleClick} ></ButtonCount> 
    <ButtonCount count={count} onClick={handleClick} ></ButtonCount>
    </>
    
  )
}

export default App
