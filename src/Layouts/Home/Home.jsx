import React from 'react';
import Banner from '../../Components/Banner/Banner';
import SubscriptionServices from '../../Components/SubscriptionServices/SubscriptionServices';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';


const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className='w-11/12 mx-auto my-10 lg:my-20'>
        <SubscriptionServices></SubscriptionServices>
      </div>

      <div className='w-11/12 mx-auto my-10 lg:my-20'>
        <WhyChooseUs></WhyChooseUs>
      </div>
    </div>
  );
};

export default Home;