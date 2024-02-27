
import './App.css'
import MyButton from './component/MyButton';

function App() {
  const products = [
    {title : "cabbage", is_fruit:false, id:1 },
    {title : "Radish", is_fruit:false, id:2 },
    {title : "Mango", is_fruit:true, id:3 },
  ]

  const listitems = products.map(product => <li style={{color:product.is_fruit ? 'magenta' : 'darkgreen'}} key={product.id} >{product.title}</li> );

  return (
    <>
    <ul>
      {listitems}
    </ul>
    <MyButton></MyButton>
    </>
    
  )
}

export default App
