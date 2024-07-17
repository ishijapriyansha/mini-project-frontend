import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
    <div className='' >
<nav className=" bg-blue-900 fixed w-full z-20 top-0 start-0 backdrop-blur-2xl border-b-2 border-b-solid border-b-black rounded-b-xl h-18 drop-shadow-sm">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
      <span className="self-center text-xl font-mono whitespace-nowrap dark:text-white">DECENTRALISED CREDENTIAL SYSTEM </span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <div className="sidebuttons space-x-3">
      <Link to="/create" target="_blank"><button type="button" className="text-white bg-orange-600 hover:bg-orange-800 font-mono rounded-xl text-sm px-4 py-3 text-center " >Create Credential</button></Link>
      <button type="button" className="text-white bg-orange-600 hover:bg-orange-800 font-mono rounded-xl text-sm px-4 py-3 text-center ">My Credentials</button>
      </div>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  </div>
</nav>

    </div>
    </>
  )
}
