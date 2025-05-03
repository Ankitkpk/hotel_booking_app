import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    <div className='bg-white '>
  <Link
    className="relative  w-[320px] sm:w-[360px] rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_4px]"
    to={`/rooms/${room._id}`}
    onClick={() => scrollTo(0, 0)}
    key={room._id}
  >
    <img src={room.images[0]} alt="Hotel"  className="w-full h-40 object-cover rounded-xl" />

    {index % 2 === 0 && (
      <p className="absolute top-3 left-3 text-xs px-3 py-1 bg-white text-gray-700 font-semibold rounded-full shadow">
        Best Seller
      </p>
    )}

    <div className="p-4 pt-5">
      <div className="flex items-center justify-between mb-2">
        <p className="font-playfair text-xl font-medium text-gray-800">{room.hotel.name}</p>
        <div className="flex items-center gap-1 text-sm text-yellow-500">
          <img src={assets.starIconFilled} alt="star-icon" className="h-4" />
          {room.rating || '4.5'}
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
        <img src={assets.locationIcon} alt="location-icon" className="h-4 w-4" />
        <span>{room.hotel.address}</span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <p className="text-lg font-semibold text-gray-800">
          ${room.pricePerNight} <span className="text-sm font-normal text-gray-500">/night</span>
        </p>
        <button className="ml-4 px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Book now
        </button>
      </div>
    </div>
  </Link>
</div>

  );
};

export default HotelCard;
