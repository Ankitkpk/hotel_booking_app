import React, { useState } from 'react';
import Title from '../../components/Title';
import { roomsDummyData } from '../../assets/assets';

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  // Toggle room availability
  const handleToggle = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].isAvailable = !updatedRooms[index].isAvailable;
    setRooms(updatedRooms);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subtitle="View, edit, delete and manage all listed rooms and keep the information up to date to enhance user experience."
      />
      <p className="mt-6 mb-2 text-gray-700 font-semibold">All Rooms</p>
      <div className="w-full max-w-5xl text-left border border-gray-300 rounded-lg max-h-[26rem] overflow-y-scroll overflow-x-auto mt-4">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium">Facility</th>
              <th className="py-3 px-4 text-gray-800 font-medium">Price / night</th>
              <th className="py-3 px-4 text-gray-800 font-medium">Available</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition">
                <td className="py-3 px-4">{item.roomType}</td>
                <td className="py-3 px-4">{item.amenities.join(', ')}</td>
                <td className="py-3 px-4">₹{item.pricePerNight}</td>
                <td className="py-3 px-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      onChange={() => handleToggle(index)}
                    />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer-checked:bg-blue-600 relative transition-colors duration-200">
                      <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
