import React from 'react';
import { Link } from 'react-router';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const SubscriptionServiceCard = ({ singleData }) => {

  const { thumbnail, name, techCategory, description, frequency, price, rating, id } = singleData;

  return (
    <div className='border border-gray-300 p-5 rounded-xl shadow-xl'>
      <img className='w-full h-[250px] object-cover rounded-xl' src={thumbnail} alt="" />

      <div className='flex justify-start items-center gap-4 my-4'>
        <p className='text-2xl font-semibold'>{name}</p>
        <p className='text-xs py-1 px-2 rounded-full font-medium border border-[#8DC53F] bg-[#d6f1b1]'>{techCategory}</p>
      </div>

      <p className='line-clamp-2 text-neutral-500 mb-4'>{description}</p>

      <hr className='mb-3 border-gray-200' />

      <div className='flex justify-between items-center'>
        <div>
          <p >Schedule: {frequency}</p>




          {/* Rating */}
          <div className='flex justify-start items-center gap-2 mt-1'>
            <p>Rating:</p>
            <div className='flex items-center'>
              {
                Array.from({ length: 5 }, (_, i) => {
                  const starValue = i + 1;
                  if (rating >= starValue) {
                    return <FaStar key={i} size={18} color="#FBBF24" />;
                  } else if (rating >= starValue - 0.5) {
                    return <FaStarHalfAlt key={i} size={18} color="#FBBF24" />;
                  } else {
                    return <FaRegStar key={i} size={18} color="#E5E7EB" />;
                  }
                })
              }
              <span className='ml-2 text-sm text-gray-500'>({rating})</span>
            </div>




          </div>
        </div>
        <div>
          <p>Price: <span className='font-bold text-2xl'>{price}</span></p>
        </div>
      </div>



      <Link to={`/SubscriptionServiceDetails/${id}`}>
        <button className='w-full py-3 bg-[#123524] text-white rounded-lg mt-5 font-semibold cursor-pointer'>View more</button>
      </Link>
    </div >
  );
};

export default SubscriptionServiceCard;