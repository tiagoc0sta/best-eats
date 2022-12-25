import React from "react";

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/*Overlay*/}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p>Sun's Out, BOGO's Out</p>
          <p>Through 8/26</p>
          <button>Order Now</button>
        </div>
        <img
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt=''
        />
      </div>
    </div>
  );
};

export default HeadLineCards;
