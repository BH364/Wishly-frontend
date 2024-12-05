import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets.js' 
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx';
import {toast} from 'react-toastify';

import axios from 'axios';
import { CarIcon, Contact, Home, Info, Layers, LogOut, Menu, MenuIcon, Search, Settings, ShoppingCart, User } from 'lucide-react';
const Navbar = () => {
    const [visible,setVisible]=useState(false);
     const {setShowSearch,getCartCount,navigate,token,setToken,setCartItems,backendUrl} =useContext(ShopContext);
     const logout=async ()=>{
      try{
      const response= await axios.post(`${backendUrl}/user/logout`,{},{
        withCredentials:true
      })
      navigate('/login');

       localStorage.removeItem('token');
       setToken('');
    }
     catch(err){
      console.log(err);
      toast.error(err.message);
     }
     }
     
  return (
    <div className='flex items-center justify-between font-medium'>
      <Link to='/'> <img src={assets.logo} alt="logo" className='w-28 h-28 rounded-full'/></Link> 
        <ul className='hidden sm:flex gap-5 text-sm  py-5'>
           <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] hidden' />
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] hidden' />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] hidden' />
            </NavLink>
 </ul>  
       <div className='flex items-center gap-6'>
          <Search onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer'/>
          <div className='group relative'>
           <p onClick={()=>token ? null: navigate('/login')} className='w-5 cursor-pointer'><User /></p>
           {token &&
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-3 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                {/* <p onClick={()=>navigate('/profile')} className='cursor-pointer hover:text-black flex flex-row gap-1'><User />My Profile</p> */}
                <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black flex flex-row gap-1'><ShoppingCart /> Orders</p>
                <p onClick={()=>navigate('/settings')} className='cursor-pointer hover:text-black flex flex-row gap-1'><Settings /> Settings</p>
                <p onClick={logout} className='cursor-pointer hover:text-black flex flex-row gap-1'><LogOut />Log Out</p>
               </div>
            </div>
}
          </div>
          <Link to='/cart' className='relative'>
          <ShoppingCart />
          
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>{getCartCount()}</p>
          </Link>
          <p onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden'><MenuIcon /></p>
       </div>
       <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all ${visible? 'w-full': 'w-0'}`} >
           <div className='flex flex-col text-current'>
            <div onClick={()=>{setVisible(false)}} className='flex items-center gap-4 p-3 cursor-pointer'>
                <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="dropdown"/>
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border flex flex-row gap-2' to='/'><Home />HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border flex flex-row gap-2' to='/collection'><Layers/>COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border flex flex-row gap-2' to='/about'><Info /> ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border flex flex-row gap-2' to='/contact'><Contact/> CONTACT</NavLink>
           </div>
       </div>
   </div>
  )
}

export default Navbar