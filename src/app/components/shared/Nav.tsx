'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = () => {

    const pathName =usePathname()

    const links = ( <>
          <li><Link className= {`no-underline  ${pathName === '/' ? 'bg-[#1a2312] text-[#c2f800]' : 'text-white'}`}
         href="/">Workouts</Link></li>
        <li><Link className= {`no-underline  ${pathName === '/' ? 'bg-[#1a2312] text-[#c2f800]' : 'text-white'}`} 
         href="/myPlan">My Plan</Link></li>
   </>
    )
  
    return (
         <div className="navbar  shadow-sm px-[5%] bg-[#15171d]">
     <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="text-white lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold text-white">FITLOG</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="text-white">Plan</a>
    <a className="text-white">Saved</a>
  </div>
</div>
    );
};

export default Nav;