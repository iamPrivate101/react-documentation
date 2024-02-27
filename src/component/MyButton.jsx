
const MyButton = () => {

  function handleclick(){
    alert('here clicked');
  };
    
  return (
    <div>
      <button onClick={handleclick} >Click me</button>
    </div>
  )
}

export default MyButton
