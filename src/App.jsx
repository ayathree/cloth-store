

import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Cloths from './components/Cloths/Cloths';
import Cloth from './components/Cloth/Cloth';

function App() {
  const [cloths, setCloths]=useState([]);
  const [items, setItems]= useState([])

  useEffect(()=>{
    fetch('cloth.json')
    .then(res=>res.json())
    .then(data=>setCloths(data))
  },[])

  const handleAdd=(cloth)=>{

    const isExist = items.find(item=> item.id == cloth.id);
    if (!isExist) {
      const newItems =[...items,cloth]
      setItems(newItems)

      
    }
    else{
      alert('already exist')
    }

  }
  console.log(items)

  const handleDelete = (id)=>{
    const newCart = items.filter(item=>item.id != id);
    setItems(newCart)
  }



  



  

  return (
    <>
      
      <h1 className='text-3xl font-bold mb-16'>Clothing Store</h1>
      <div className='flex flex-row justify-between  gap-6'>
        <div className='grid grid-cols-3 gap-2 w-2/3'>
          {
            cloths.map(cloth=><Cloths key={cloth.id}
            cloth={cloth}
            handleAdd={handleAdd}></Cloths>)
          }
        </div>
        <div className='border-2 border-solid border-black p-9 w-1/3'>
        <div className='grid grid-cols-3 gap-6 items-center'>
            <p className='text-xl font-semibold' >name</p>
            <p className='text-xl font-semibold'>price</p>
          </div>
         {
          items.map(item=><Cloth key={item.id}
          item={item}
          
          handleDelete={handleDelete}></Cloth>)
         }
        </div>
      </div>
      
    </>
  )
}

export default App
