import React from 'react'

const Refex = () => {
    let a=5;
    const refcount=useRef(0);
    console.log("object Rendered")
    function handleref(){
        refcount.current++;
        console.log("refcount=",refcount.current)
        if(refcount.current==a)
            alert("counter ="+refcount.current)
    }
  return (
    <div>
    <h1>Refcount={refcount.current}</h1>
    <button onClick={hand}
    </div>
  )
}

export default Refex