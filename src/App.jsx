import BigSquare from "./Components/BigSquare"
import Header from "./Components/Header"
import { useState } from "react"
function App() {
  const[darkMode,setDarkMode]=useState(false)
  function toggle(){
    setDarkMode(prevMode=>!prevMode)
  }
  const theme=darkMode?"dark":"light";

  return (
    <div className={`App ${theme}-app`}>
      <Header toggle={toggle} darkMode={darkMode}/>
      <BigSquare darkMode={darkMode}/>
    </div>
  )
}

export default App
