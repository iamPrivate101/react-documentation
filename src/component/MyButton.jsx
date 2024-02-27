import { useState } from "react"; //to remember soething and display it

const MyButton = () => {

  const [count, setCount] = useState(0);

  function handleclickalert(){
    alert('here clicked');
  };
    
  return (
    <div>
      <button onClick={handleclickalert} >Alert</button>
    </div>
  )
}

export default MyButton
