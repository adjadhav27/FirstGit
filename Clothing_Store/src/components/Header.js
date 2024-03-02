import React, { useContext } from 'react';
import { allContext } from '../store/AllContext';


const Header = () => {

  const {customerFormData, showCard, setShowCard} = useContext(allContext)
  let totalQty = customerFormData.reduce((acc, curr) => {
    console.log(`current item: ${JSON.stringify(curr)}`);
    const lQty = Number(curr.lQty) || 0;
    const mQty = Number(curr.mQty) || 0;
    const sQty = Number(curr.sQty) || 0;
    return acc + lQty + mQty + sQty
}, 0);

  const handleClick =()=>{
    setShowCard(!showCard);
  }

  return (
    <header className='header-container mx-auto flex items-center justify-between bg-purple-500 p-4 fixed top-0 w-full z-50'>
        <div>
            <h1 className='text-2xl text-white font-bold'>
               <a href={"https://www.google.com"}>Lotus Petal Fashion</a>
            </h1>
        </div>
        <button 
      className="flex items-center text-white" 
      onClick={handleClick}
    >
      <span className="ml-2 ">
      🛒 Cart {totalQty}
      </span>
    </button>
    </header>
  )
}

export default Header;


