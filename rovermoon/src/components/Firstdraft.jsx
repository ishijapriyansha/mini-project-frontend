import React from 'react'
import newnewtarget from "./newnewtarget.jpg"
import '../index.css'

export default function Firstdraft() {
  return (
    <>
      <div className=' h-100 w-fit '>
        <img src={newnewtarget} alt="test" srcset="" />
      </div>
      <div className='bgimagediv h-screen w-screen absolute top-0 opacity-60 z-10'>
       <div className='blackdiv flex bg-black h-11/12 w-4/5 my-5 mx-36 rounded-2xl relative z-20 font-serif'>
       <div className='textdiv inline-block w-1/2 '><p className=' text-white text-6xl px-16 pt-28 '>Secure your Credentials-within minutes! <br></br></p><p className='text-blue-500 text-3xl px-20 pt-10 '>SubText</p>
      
       </div>
       <div className="formdiv inline-block w-1/2 text-white font-semibold">
      
       <form className='pr-3 pb-3 pt-1'>
      <div className="mb-4">
        <label htmlFor="image" className="block mb-2">Attach Image</label>
        <input type="file" id="image" name="image" className="w-full p-2 bg-gray-800 rounded" />
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">Title</label>
        <input type="text" id="title" name="title" required className="w-full p-2 bg-gray-800 rounded" />
      </div>

      <div className="mb-4">
        <label htmlFor="recipient" className="block mb-2">Recipient</label>
        <input type="text" id="recipient" name="recipient" required className="w-full p-2 bg-gray-800 rounded" />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">Description</label>
        <textarea id="description" name="description" rows="3" required className="w-full p-2 bg-gray-800 rounded"></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="expiry" className="block mb-2">Expiry Date</label>
        <input type="date" id="expiry" name="expiry" className="w-full p-2 bg-gray-800 rounded" />
      </div>

      <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-700 rounded">Submit</button>
    </form>
       </div>
       </div>
      </div>
    </>
  )
}


