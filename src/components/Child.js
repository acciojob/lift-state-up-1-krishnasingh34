import React from 'react'

const Child = ({setShowModal, showModal}) => {
  return (
    <div className='child'>
        <h1>Child Component</h1>
        <button
        onClick={()=> {
            setShowModal(true)
        }}
        >Show Modal</button>
        {
            showModal==true &&
            <div>
                <h2>Modal Content</h2>
                <p>This is the modal content</p>
            </div>
        }
    </div>
  )
}

export default Child