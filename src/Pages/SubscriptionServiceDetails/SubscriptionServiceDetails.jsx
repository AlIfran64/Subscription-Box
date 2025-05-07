import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubscriptionServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const detailsData = data.find((item) => item.id == id);

  const { thumbnail, name, techCategory, description, frequency, price, rating } = detailsData;

  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    const numericRating = parseFloat(reviewRating);
    if (!reviewText.trim()) {
      toast.error('Please enter a review.');
      return;
    }

    if (isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
      toast.error('Rating must be a number between 1 and 5.');
      return;
    }

    const newReview = {
      text: reviewText,
      rating: numericRating,
      date: new Date().toLocaleString(),
    };

    setReviews([newReview, ...reviews]);
    setReviewText('');
    setReviewRating('');
    toast.success('Review submitted successfully!');
  };

  const details = 'Subscription Service Details';

  return (
    <div className='w-11/12 mx-auto'>
      <Helmet>
        <title>{details}</title>
      </Helmet>
      <h1 className='text-4xl font-bold mb-5 mt-10 text-center'>Subscription Service Details</h1>
      <p className='text-center mb-10'>
        Get all the details about your selected subscription box, including the fresh ingredients, delivery schedule, and special features <br />
        crafted for your lifestyle.
      </p>

      <div className='bg-neutral-50 p-10 border-2 border-neutral-300 shadow-xl rounded-2xl flex flex-col lg:flex-row justify-center items-stretch gap-8'>
        {/* left */}
        <div className='lg:w-1/2'>
          <img className='rounded-2xl w-full h-full object-cover' src={thumbnail} alt={name} />
        </div>

        {/* Right */}
        <div className='lg:w-1/2'>
          <div className='flex justify-start items-center gap-5 mb-5'>
            <h1 className='font-bold text-3xl'>{name}</h1>
            <p className='text-xs py-1 px-2 rounded-full font-medium border border-[#8DC53F] bg-[#d6f1b1]'>{techCategory}</p>
          </div>
          <p className='text-neutral-800 text-lg text-justify'>{description}</p>

          <hr className='my-3 border-gray-200' />

          <div className='flex justify-between items-center mb-5'>
            <div>
              <p className='text-lg'>Schedule: {frequency}</p>

              {/* Rating */}
              <div className='flex justify-start items-center gap-2 mt-1'>
                <p className='text-lg'>Rating:</p>
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
              <p className='text-lg'>Price: <span className='font-bold text-3xl'>{price}</span></p>
            </div>
          </div>

          {/* Review Section */}
          <div className='mt-6'>
            <h2 className='text-2xl font-semibold mb-3'>Write a Review</h2>
            <textarea
              className='w-full p-3 border border-gray-300 rounded mb-3 resize-none'
              rows="3"
              placeholder='Write your review here...'
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <input
              className='w-full p-3 border border-gray-300 rounded mb-3'
              type='number'
              placeholder='Rating (1-5)'
              value={reviewRating}
              onChange={(e) => setReviewRating(e.target.value)}
              min={1}
              max={5}
              step={0.1}
            />
            <button
              className='bg-[#123524] hover:bg-white hover:text-black text-white px-6 py-3 rounded font-semibold transition'
              onClick={handleReviewSubmit}
            >
              Submit Review
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>

      {/* Submitted Reviews */}
      {reviews.length > 0 && (
        <div className='mt-12'>
          <h2 className='text-2xl font-bold mb-4'>User Reviews</h2>
          <div className='space-y-4'>
            {reviews.map((review, index) => (
              <div key={index} className='p-4 border border-gray-300 rounded shadow bg-white'>
                <p className='text-lg mb-1'>{review.text}</p>
                <div className='flex items-center gap-2 text-sm text-gray-500'>
                  <div className='flex'>
                    {
                      Array.from({ length: 5 }, (_, i) => {
                        const starValue = i + 1;
                        if (review.rating >= starValue) {
                          return <FaStar key={i} size={14} color="#FBBF24" />;
                        } else if (review.rating >= starValue - 0.5) {
                          return <FaStarHalfAlt key={i} size={14} color="#FBBF24" />;
                        } else {
                          return <FaRegStar key={i} size={14} color="#E5E7EB" />;
                        }
                      })
                    }
                  </div>
                  <span>({review.rating})</span>
                  <span className='ml-4'>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionServiceDetails;
