import React from 'react';
import { useLoaderData } from 'react-router';
import SubscriptionServiceCard from '../../Components/SubsciptionServiceCard/SubscriptionServiceCard';


const ThisWeeksBox = () => {

  // load data 
  const data = useLoaderData();

  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-4xl font-bold mb-5 mt-8 text-center'>This weeks box</h1>
      <p className='mb-10 text-center'>"Freshly picked, perfectly packed — discover what’s inside your box this week!"</p>

      <div className='grid grid-cols-1 lg:grid-cols-3 justify-center place-items-center gap-10'>
        {
          data.map((singleData, index) => <SubscriptionServiceCard key={index} singleData={singleData}></SubscriptionServiceCard>)
        }
      </div>
    </div>
  );
};

export default ThisWeeksBox;