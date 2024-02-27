
const ButtonCount = ({count, onClick}) => {
    
  return (
    <div>
      <button onClick={onClick} >Click to Count</button>
      <h3>Clicked {count} times.</h3>
    </div>
  )
}

export default ButtonCount
