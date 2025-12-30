// import { useState, useCallback } from 'react'
// import './App.css'


// function App() {
//   const [length, setLength] = useState(8)
//   const[numberAllowed, setNumberAllowed]=useState(false)
//   const[charAllowed, setcharAllowed]=useState(false)
//   const [password, setPassword]=useState('')
//   const passwordGenerator=useCallback(()=>{

//     let pass=""
//     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if(numberAllowed) str+="0123456789"
//     if(charAllowed) str+="@#$%&!_-=*=[]{}`~^"
//     for(let i =1;i<=Array.length;i++){
//       let char=Math.floor(Math.random()*str.length+1)
//       pass=str.charAt(char)
//       setPassword(pass)
//     }


//   },[length,numberAllowed,charAllowed,setPassword])

//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500 ">
//         <h1 className='text-white text-center'>Password Generator</h1>
//       <div className="flex shadow rounded-lg overflow-hidden mb-4">
      
//         <input type="text"
//         value={password}
//         className='outline-none w-full py-1 px-3'
//         placeholder='password'
//         readOnly />
//         <button
//         className='outline-none bg-blue-700 shrink-0'>copy</button>
        
//       </div>
//       <div className="flex text-sm gap-x-2">
//   <div className="flex items-center gap-x-1">
//     <input
//       type="range"
//       min={6}
//       max={100}
//       value={length}
//       className="cursor-pointer"
//       onChange={(e) => setLength(e.target.value)}
//     />
//     <label>Length: {length}</label>
//   </div>
//     <div className="flex items-center gap-x-1">
//   <input
//     type="checkbox"
//     defaultChecked={numberAllowed}
//     id="numberInput"
//     onChange={() => {
//       setNumberAllowed((prev) => !prev)
//     }}
//   />
//   <label htmlFor="numberInput">Numbers</label>
// </div>

// </div>
// </div>

//     </>
//   )
// }

// export default App

import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // PASSWORD GENERATOR FUNCTION
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#$%&!_-=*[]{}~^"

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  // AUTO GENERATE WHEN VALUES CHANGE
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // COPY FUNCTION
  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    alert("Password Copied!")
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md shadow-lg rounded-lg px-4 py-6 bg-gray-700 text-orange-400">

        <h1 className="text-white text-center text-xl font-bold mb-4">
          Password Generator
        </h1>

        {/* PASSWORD DISPLAY */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="Password"
            readOnly
          />
          <button
            onClick={copyPassword}
            className="outline-none bg-blue-700 text-white px-3"
          >
            copy
          </button>
        </div>

        {/* CONTROLS */}
        <div className="flex text-sm gap-x-2 items-center justify-between">

          {/* LENGTH */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length ({length})</label>
          </div>

          {/* NUMBERS */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label>Numbers</label>
          </div>

          {/* CHARACTERS */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label>Characters</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App


