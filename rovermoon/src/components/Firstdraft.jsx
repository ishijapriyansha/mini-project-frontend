import React from 'react'
import newnewtarget from "./newnewtarget.jpg"
import '../index.css'

export default function Firstdraft() {
  return (
    <>
        <div className=' h-100 w-100  '>
        <img src={newnewtarget} alt="test" srcset="" />
      </div>
      <div className='bgimagediv h-fit w-screen absolute top-0 z-10 backdrop-blur '>
       <div className='blackdiv flex bg-slate-900 h-11/12 w-4/5 my-5 mx-36 mt-2 rounded-2xl relative z-20 font-serif border-solid border-8 border-black opacity-75 top-36'>
       <div className='textdiv inline-block w-1/2 '><p className=' text-white text-6xl px-16 pt-28  '>Secure your Credentials-within minutes! <br></br></p><p className='text-blue-500 text-3xl px-20 pt-10 '></p>
      
       </div>
       <div className="formdiv inline-block w-1/2 text-white font-semibold ">
      
       <form className='pr-3 pb-3 pt-1'>
      <div className="mb-1">
        <label htmlFor="image" className="block mb-1 ">Attach Image</label>
        <input type="file" id="image" name="image" className="w-full p-2 bg-black rounded border-blue-300 border-solid border-2" />
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block mb-1">Title</label>
        <input type="text" id="title" name="title" required className="w-full p-2 bg-black rounded border-blue-300 border-solid border-2" />
      </div>

      <div className="mb-4">
        <label htmlFor="recipient" className="block mb-1">Recipient</label>
        <input type="text" id="recipient" name="recipient" required className="w-full p-2 bg-black rounded border-blue-300 border-solid border-2" />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-1">Description</label>
        <textarea id="description" name="description" rows="3" required className="w-full p-2 bg-black rounded border-blue-300 border-solid border-2"></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="expiry" className="block mb-1">Expiry Date</label>
        <input type="date" id="expiry" name="expiry" className="w-full p-2 bg-black rounded border-blue-300 border-solid border-2" />
      </div>

      <button type="submit" className="w-full p-2 bg-blue-700 hover:bg-blue-900 rounded ">Submit</button>
        </form>
       </div>
       </div>
      </div>
</>
    
  )
}


