//import React and ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'

function getButtonText(){
  return 'Click me! Yay'
}

//Create a React component
const App =() =>{

  //reference text
  //const textButton ='Click me!'
  return (<div>
    <label className="label">
     Enter name:
     </label>
     <input id="name" type="text"/>
     <button style={{backgroundColor:'green',color:'white'}}>
     {getButtonText()}
     </button>
 </div>);

}
//Take the React component and show it to the screen
ReactDOM.render(<App/>, document.querySelector("#root"))

export default App;