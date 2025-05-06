import React from 'react';

const Faqs = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold mb-10'>Frequently Asked Questions</h1>

      <div className=' lg:flex justify-between items-center gap-10'>
        {/* left */}
        <div className='lg:w-1/2'>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">1. What is FreshiKart?</div>
            <div className="collapse-content text-sm">FreshiKart is a vegetable subscription service that delivers fresh, locally-sourced, chemical-free vegetables right to your doorstep. We aim to make healthy eating convenient and affordable.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">2. Where do you source your vegetables from?</div>
            <div className="collapse-content text-sm">We partner with trusted local farmers who follow ethical and sustainable farming practices to ensure maximum freshness and quality.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">3. What subscription plans are available?</div>
            <div className="collapse-content text-sm">We offer flexible plans including weekly, bi-weekly, and monthly deliveries. You can also customize your box contents based on your preferences.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">4. Can I skip or pause my subscription?</div>
            <div className="collapse-content text-sm">Yes, you can easily skip a delivery or pause your subscription anytime through your dashboard—no hidden fees or penalties.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">5. Is there a delivery charge?</div>
            <div className="collapse-content text-sm">We offer free doorstep delivery in selected areas. A minimal delivery fee may apply in extended service zones.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">6. Are the vegetables organic?</div>
            <div className="collapse-content text-sm">While not all produce is certified organic, we ensure all vegetables are free from harmful chemicals and pesticides. We focus on clean and sustainable farming.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">7. What if I'm not home during delivery?</div>
            <div className="collapse-content text-sm">No worries! You can leave delivery instructions (e.g., leave at door, with a neighbor) during checkout. Our insulated packaging helps keep produce fresh.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">8. Can I gift a box to someone?</div>
            <div className="collapse-content text-sm">Absolutely! You can send a gift box to friends or family with a personalized message and delivery date.</div>
          </div>
        </div>



        {/* Right */}
        <div className='lg:w-1/2 grid grid-cols-2 grid-rows-3 gap-4 h-[575px]'>

          {/* faq-1: */}
          <div className="row-span-2 rounded-2xl border border-neutral-300 p-3">
            <img className='w-full h-full object-cover rounded-2xl' src="../../../images/faq-1.jpg" alt="image" />
          </div>

          {/* faq-2:*/}
          <div className='rounded-2xl border border-neutral-300 p-3'>
            <img className='w-full h-full object-cover rounded-2xl' src="../../../images/faq-2.jpg" alt="image" />
          </div>

          {/* faq-3:*/}
          <div className="row-span-2 rounded-2xl border border-neutral-300 p-3">
            <img className='w-full h-full object-cover rounded-2xl' src="../../../images/faq-3.jpg" alt="image" />
          </div>

          {/* faq-4:  */}
          <div className='rounded-2xl border border-neutral-300 p-3'>
            <img className='w-full h-full object-cover rounded-2xl' src="../../../images/faq-4.jpg" alt="image" />
          </div>
        </div>


      </div>

    </div>
  );
};

export default Faqs;