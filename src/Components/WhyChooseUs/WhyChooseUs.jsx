import React from 'react';
import img4 from '../../../public/images/vegetables-wooden-table_199223-1352.jpg';

const WhyChooseUs = () => {
  return (
    <section
      className="relative px-6 py-16 rounded-xl"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${img4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left: Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">

          {/* Card 1 */}
          <div className="relative h-72 rounded-2xl bg-[#123524] shadow-xl hover:shadow-2xl transition-all overflow-hidden p-6 flex flex-col items-center justify-center text-center">
            <div className="bg-white rounded-full p-4 mb-4">
              <img className="w-12 h-12" src="/images/fresh.png" alt="Farm Fresh" />
            </div>
            <h2 className="font-semibold text-xl text-white mb-2">Farm-Fresh Goodness</h2>
            <p className="text-sm text-white">We source directly from trusted local farms to ensure maximum freshness.</p>
          </div>

          {/* Card 2 */}
          <div className="relative h-72 rounded-2xl bg-[#123524] shadow-xl hover:shadow-2xl transition-all overflow-hidden p-6 flex flex-col items-center justify-center text-center">
            <div className="bg-white rounded-full p-4 mb-4">
              <img className="w-12 h-12" src="/images/flexibility.png" alt="Flexible Plan" />
            </div>
            <h2 className="font-semibold text-xl text-white mb-2">Flexible Subscription Plans</h2>
            <p className="text-sm text-white">Weekly, bi-weekly, or monthly—tailor your box to your lifestyle.</p>
          </div>

          {/* Card 3 */}
          <div className="relative h-72 rounded-2xl bg-[#123524] shadow-xl hover:shadow-2xl transition-all overflow-hidden p-6 flex flex-col items-center justify-center text-center">
            <div className="bg-white rounded-full p-4 mb-4">
              <img className="w-12 h-12" src="/images/best-price.png" alt="Best Price" />
            </div>
            <h2 className="font-semibold text-xl text-white mb-2">Affordable Pricing</h2>
            <p className="text-sm text-white">Get premium-quality produce without breaking the bank.</p>
          </div>

          {/* Card 4 */}
          <div className="relative h-72 rounded-2xl bg-[#123524] shadow-xl hover:shadow-2xl transition-all overflow-hidden p-6 flex flex-col items-center justify-center text-center">
            <div className="bg-white rounded-full p-4 mb-4">
              <img className="w-12 h-12" src="/images/door delivery.png" alt="Doorstep Delivery" />
            </div>
            <h2 className="font-semibold text-xl text-white mb-2">Doorstep Delivery</h2>
            <p className="text-sm text-white">Skip the grocery store chaos. We bring the market to you.</p>
          </div>

        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-white">Why Choose Us?</h1>
          <p className="text-lg text-white leading-relaxed text-justify">
            At <span className="font-semibold">FreshiKart</span>, we believe fresh, healthy food shouldn't be a luxury—it should be a lifestyle. That’s why we’ve partnered with local farmers to deliver high-quality, chemical-free vegetables straight to your doorstep.
            <br /><br />
            Our subscription model offers full flexibility, allowing you to choose what you want and when you want it. Whether you're a busy professional, a health-conscious family, or someone trying to eat better, we’re here to make your life easier and your meals fresher.
            <br /><br />
            Join the movement toward sustainable living and discover the joy of seasonal eating with our carefully curated vegetable boxes packed with nutrition, delivered with care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
