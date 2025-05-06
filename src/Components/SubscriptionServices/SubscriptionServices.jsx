import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SubscriptionServiceCard from '../SubsciptionServiceCard/SubscriptionServiceCard'

const SubscriptionServices = () => {

  // Load data
  const data = useLoaderData();

  // sliced data
  const initialData = data.slice(0, 3);

  // State for displaying data and toggle status
  const [viewAll, setViewAll] = useState(false);

  // Toggle button handler
  const handleToggleView = () => {
    setViewAll(!viewAll);
  };

  return (
    <div>
      <h1 className='text-4xl font-bold mb-10'>Subscription Services</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 justify-center place-items-center gap-10'>
        {
          (viewAll ? data : initialData).map((singleData, index) => (
            <SubscriptionServiceCard key={index} singleData={singleData} />
          ))
        }
      </div>

      <div className='flex justify-center mt-8'>
        <button
          onClick={handleToggleView}
          className='py-3 px-8 bg-[#F1851E] rounded-md text-white cursor-pointer font-medium'
        >
          {viewAll ? 'Show less' : 'Show all'}
        </button>
      </div>
    </div>
  );
};

export default SubscriptionServices;