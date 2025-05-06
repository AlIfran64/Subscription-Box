import React from 'react';
import Banner from '../../Components/Banner/Banner';
import SubscriptionServices from '../../Components/SubscriptionServices/SubscriptionServices';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import Faqs from '../../Components/Faqs/Faqs';


const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className='w-11/12 mx-auto my-20 lg:my-40'>
        <SubscriptionServices></SubscriptionServices>
      </div>

      <div className='w-11/12 mx-auto my-20 lg:my-40'>
        <WhyChooseUs></WhyChooseUs>
      </div>

      <div className='w-11/12 mx-auto my-20 lg:my-40'>
        <Faqs></Faqs>
      </div>
    </div>
  );
};

export default Home;