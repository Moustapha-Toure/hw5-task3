import React from 'react'

const WaitWhat = ({ txt }) => {
    if(!txt){
        txt= "didn't even pass in a value";
    }

  return (
    <h1 style={{ color: "wheat", textAlign: "center"}}>{txt}</h1>
  )
}

export default WaitWhat