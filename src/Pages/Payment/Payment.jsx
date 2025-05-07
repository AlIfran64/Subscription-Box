import React from "react";
import { Helmet } from "react-helmet-async";

const Payment = () => {
  const payment = "Payment"
  return (
    <section className="py-8 antialiased md:py-16 w-11/12 mt-15 mx-auto bg-[#f5f8f6]">
      <Helmet>
        <title>{payment}</title>
      </Helmet>
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-[#123524] sm:text-2xl">Payment</h2>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            {/* Payment Form */}
            <form className="w-full rounded-lg border border-[#cce0d6] bg-white p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8">
              <div className="mb-6 grid grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-[#123524]">Full name*</label>
                  <input type="text" id="full_name" placeholder="Bonnie Green"
                    className="w-full rounded-lg border border-[#cce0d6] bg-[#f0f5f2] p-2.5 text-sm text-[#123524] placeholder-[#8ba596]"
                    required />
                </div>

                {/* Card Number */}
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="card-number" className="mb-2 block text-sm font-medium text-[#123524]">Card number*</label>
                  <input type="text" id="card-number" placeholder="xxxx-xxxx-xxxx-xxxx"
                    className="w-full rounded-lg border border-[#cce0d6] bg-[#f0f5f2] p-2.5 text-sm text-[#123524] placeholder-[#8ba596]"
                    required />
                </div>

                {/* Expiry Date */}
                <div>
                  <label htmlFor="expiry" className="mb-2 block text-sm font-medium text-[#123524]">Expiration*</label>
                  <input type="text" id="expiry" placeholder="MM/YY"
                    className="w-full rounded-lg border border-[#cce0d6] bg-[#f0f5f2] p-2.5 text-sm text-[#123524] placeholder-[#8ba596]"
                    required />
                </div>

                {/* CVV */}
                <div>
                  <label htmlFor="cvv" className="mb-2 block text-sm font-medium text-[#123524]">CVV*</label>
                  <input type="text" id="cvv" placeholder="123"
                    className="w-full rounded-lg border border-[#cce0d6] bg-[#f0f5f2] p-2.5 text-sm text-[#123524] placeholder-[#8ba596]"
                    required />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit"
                className="w-full rounded-lg bg-[#123524] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#0f2d1f] focus:outline-none focus:ring-4 focus:ring-[#2d4b3a]">
                Pay now
              </button>
            </form>

            {/* Order Summary */}
            <div className="mt-6 grow sm:mt-8 lg:mt-0">
              <div className="space-y-4 rounded-lg border border-[#cce0d6] bg-white p-6">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between">
                    <dt className="text-base text-[#567a6a]">Original price</dt>
                    <dd className="text-base font-medium text-[#123524]">$6,592.00</dd>
                  </dl>
                  <dl className="flex items-center justify-between">
                    <dt className="text-base text-[#567a6a]">Savings</dt>
                    <dd className="text-base font-medium text-green-600">-$299.00</dd>
                  </dl>
                  <dl className="flex items-center justify-between">
                    <dt className="text-base text-[#567a6a]">Store Pickup</dt>
                    <dd className="text-base font-medium text-[#123524]">$99</dd>
                  </dl>
                  <dl className="flex items-center justify-between">
                    <dt className="text-base text-[#567a6a]">Tax</dt>
                    <dd className="text-base font-medium text-[#123524]">$799</dd>
                  </dl>
                </div>
                <dl className="flex items-center justify-between border-t border-[#cce0d6] pt-2">
                  <dt className="text-base font-bold text-[#123524]">Total</dt>
                  <dd className="text-base font-bold text-[#123524]">$7,191.00</dd>
                </dl>
              </div>

              {/* Payment logos */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <img className="h-8" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="PayPal" />
                <img className="h-8" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="Visa" />
                <img className="h-8" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="Mastercard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
