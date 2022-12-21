import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div classname='max-x-[1640px] mx-auto flex justify-between items-center p-4'>
      {/*Left side*/}
      <div className='flex items-center'>
        <div>
          <AiOutlineMenu size={30} />
        </div>
        <h1>
          Best <span>Eats</span>
        </h1>
        <div>
          <p>Delivery</p>
          <p>Pickup</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
