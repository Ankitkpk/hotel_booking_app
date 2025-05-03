import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col px-6 md:px-16 lg:mx-24 xl:px-32 pt-20 pb-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Title
          align="left"
          title="Exclusive Offers"
          subtitle="Take advantage of our limited time offers and special packages to enhance your stay and create unforgettable memories"
        />
        <button className="group flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 text-sm font-medium transition-all duration-200">
          View all offers
          <img
            className="group-hover:translate-x-1 transition-transform duration-200"
            src={assets.arrowIcon}
            alt="arrow icon"
          />
        </button>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col justify-between p-6 h-72 rounded-xl text-white bg-no-repeat bg-cover bg-center transition-transform hover:scale-[1.02]"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div>
              <p className="text-lg font-semibold inline-block px-3 py-1 rounded-md">
                {item.priceOff}% OFF
              </p>
            </div>

            <div className="mt-auto p-4 rounded-md ">
              <p className="text-lg font-bold">{item.title}</p>
              <p className="text-sm opacity-90">{item.description}</p>
              <p className="text-xs mt-1 text-gray-300">Expires: {item.expiryDate}</p>
              <button className="mt-2 group flex items-center gap-1 text-sm font-medium  hover:opacity-90 transition-all">
                View offer
                <img
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  src={assets.arrowIcon}
                  alt="arrow icon"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffers
