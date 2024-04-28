import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export default function todo() {
const [ handl ,Sethandl ] =useState("")
const [final , Setfinal ]= useState([])


  return (
    <div className='content-center text-center bg-slate-900 '>
    <div className='py-5'>
    <p className='text-lg font-serif text-slate-200 '>Add Your List Here</p>
    <div className='flex gap-2 text-sm font-serif p-2 rounded-2xl  text-slate-200 mt-5 w-fit m-auto bg-slate-800'>
    <input type="text" placeholder='Enter ur Task here' className='bg-slate-800 border-b border-slate-100' value={handl} onChange={(e)=>{Sethandl(e.target.value)}} />
    <p  onClick={()=>{if(!handl){
    }else{
      Setfinal([...final , handl])
      Sethandl("");
    }} 
      
    }
    className='text-lg cursor-pointer'>+</p>
    </div>
    {final.map((elem,ind)=>{
     return(
      <div key={ind}  className='flex gap-2 text-sm font-serif p-2 rounded-2xl  text-slate-200 mt-5 w-fit m-auto bg-slate-800 '>
      {elem}
      <DeleteIcon className='' onClick={()=>{
        console.log("Delted");
        const dlt = final.filter((element,index)=>{
          return( index != ind )
        })
        Setfinal(dlt)
      }}/>
      </div>
     ) 
    })
    }

    
    <div onClick={()=>{Setfinal([]) }} className='bg-slate-800 text-slate-200 p-2 rounded-2xl w-fit m-auto mt-5 font-serif text-sm hover:shadow-sm hover:shadow-slate-200 cursor-pointer'>Clear all</div>
    </div>
    </div>
  )
}
