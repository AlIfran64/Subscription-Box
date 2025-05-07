import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const SubscriptionPlans = () => {

  const plans = 'Subscription Plans'
  return (
    <div className='w-11/12 mx-auto mt-10 mb-20'>
      <Helmet>
        <title>{plans}</title>
      </Helmet>
      <h1 className='text-4xl font-bold mb-5 text-center'>Subscription Plans</h1>
      <p className='text-center mb-15'>Healthy, affordable, and fresh vegetables delivered to your doorstep.</p>

      <div className='grid grid-cols-1 lg:grid-cols-3 justify-center place-items-center gap-5 '>
        {/* card-1 */}
        <div className="card w-96 bg-base-100 border-3 border-[#123524] shadow-sm">
          <div className="card-body">
            <span className="badge badge-xs badge-warning">Most Popular</span>
            <div >
              <h2 className="text-3xl font-bold mb-3">Basic Box</h2>
              <span className="text-xl">৳990/week</span> <br />
              <span className="text-xl">৳3,800/month (save ৳160)</span>
            </div>
            <p className='mt-5'>Perfect for individuals or couples who want to eat fresh and save time.</p>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>6–8 seasonal fruits & vegetables</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>1 delivery per week</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Weekly recipe ideas via email</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Eco-friendly packaging</span>
              </li>

            </ul>
            <Link to={'/payment'}>
              <div className="mt-6">
                <button className="btn bg-[#123524] text-white btn-block">Subscribe</button>
              </div>
            </Link>
          </div>
        </div>

        {/* card-2 */}
        <div className="card w-96 bg-base-100 border border-neutral-300 shadow-sm">
          <div className="card-body">

            <div >
              <h2 className="text-3xl font-bold mb-3">Family Box</h2>
              <span className="text-xl">৳1,990/week</span> <br />
              <span className="text-xl">৳7,600/month (save ৳360)</span>
            </div>
            <p className='mt-5'>Ideal for families looking for convenience and nutrition.</p>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>12–15 assorted items (fruits, vegetables, herbs)</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>2 deliveries per week</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Weekly meal planner included</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Reusable storage containers</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Priority customer support</span>
              </li>

            </ul>
            <Link to={'/payment'}>
              <div className="mt-6">
                <button className="btn bg-[#123524] text-white btn-block">Subscribe</button>
              </div>
            </Link>
          </div>
        </div>

        {/* card-3 */}
        <div className="card w-96 bg-base-100 border border-neutral-300 shadow-sm">
          <div className="card-body">

            <div>
              <h2 className="text-3xl font-bold mb-3">Pro Health Box</h2>
              <span className="text-xl">৳2,990/week</span> <br />
              <span className="text-xl">৳11,400/month (save ৳560)</span>
            </div>
            <p className='mt-5'>Tailored for health-conscious individuals, fitness lovers, or meal preppers.</p>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>18–20 premium, nutritionist-approved items</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>3 deliveries per week</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Smoothie & detox ingredients included</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Weekly nutrition tips</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Free monthly health consultation</span>
              </li>

            </ul>
            <Link to={'/payment'}>
              <div className="mt-6">
                <button className="btn bg-[#123524] text-white btn-block">Subscribe</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;