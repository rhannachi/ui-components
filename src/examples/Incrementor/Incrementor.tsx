import React, { useState } from 'react'

const Incrementor = () => {
  const [clicked, setClicked] = useState(0)

  return (
    <div className="flex flex-col w-1/4  " >
      <div className="flex justify-end ">
        <button className="flex-1 border-0 bg-blue-600 rounded-lg m-1 p-2 text-white text-sm" type="button" data-testid="increment-button" onClick={() => setClicked(clicked + 1)}>
          Increment
        </button>
        <button className="flex-1 bg-blue-600 rounded-lg m-1 p-2 text-white text-sm" type="button" data-testid="reset-button" onClick={()=> setClicked(0) } > Reset </button>
      </div>
      <div className="text-sm" >
        Button clicked {clicked} times
      </div>
    </div>
  )
}

export default Incrementor