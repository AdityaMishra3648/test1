import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [color, setColor] = useState("white")
  let changeColor = (col) =>{
    setColor(col);
  }
  return (
    <div className="w-screen h-screen p-0 m-0" style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <button className='bg-green-500 outline-none rounded-full  px-4 py-1' onClick={()=>changeColor("green")}>Green</button>
        <button className='bg-pink-500 outline-none rounded-full  px-4 py-1' onClick={()=>changeColor("pink")}>Pink</button>
        <button className='bg-purple-500 outline-none rounded-full  px-4 py-1' onClick={()=>changeColor("purple")}>Purple</button>
        <button className='bg-gray-500 outline-none rounded-full  px-4 py-1' onClick={()=>changeColor("gray")}>Gray</button>
        <button className='bg-red-500 outline-none rounded-full  px-4 py-1' onClick={()=>changeColor("red")}>Red</button>
      </div>
    </div>
  )
}

export default App;

