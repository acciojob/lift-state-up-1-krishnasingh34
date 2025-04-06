
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => { 
  let [showModal, setShowModal] = useState(false)
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Child
        showModal = {showModal}
        setShowModal = {setShowModal}
         />
    </div> 
  )
}

export default App
