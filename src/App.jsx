import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {


  const [idx,setIndex]=useState(1)
  const [userData,setUserData]=useState([])

     const getData=async()=>{
     const response=await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=15`)
     setUserData(response.data)
     console.log(response.data)
    }

    useEffect(function(){
            getData();
    },[idx])

    let users=<h3 className="top-1/2 left-1/2 text-5xl absolute -translate-x-1/2 -translate-y-1/2text-gray-500">Loading...</h3>

    if(userData.length >0){
             
          users= userData.map(function(ele,idx){
           
           return <div key={idx}>
              <Card ele={ele}/>
              </div>
        })
    }

  return (
    <div className='h-screen p-10 overflow-auto bg-black'>
      {/* <h1 className='bg-white fixed'>{idx}</h1>*/}
     <div className='flex h-[90%] flex-wrap gap-10 text-white'>
      {users}
     </div>


      <div className='flex justify-center items-center '>
        <button
         
         style={{opacity:idx==1?0.5:1}}
        
        onClick={()=>{
          if(idx>1){
          setIndex(idx-1)
          setUserData([])
        }
        }
        } className='active:scale-95 rounded m-10 bg-amber-400 w-40 h-10'>
         Prev
       </button>


       <h1 className='text-white'>page {idx}</h1>

       <button onClick={
        ()=>{
        setIndex(idx+1)
         setUserData([])
       }} className='active:scale-95 rounded m-10 bg-amber-400 w-40 h-10'>
         Next
      </button>
      </div>

    </div>
  )
}

export default App
