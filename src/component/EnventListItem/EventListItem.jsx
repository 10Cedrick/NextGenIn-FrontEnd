import React from 'react';

const EventListItem = ({ item }) => {

  return (
    <div className="flex flex-col items-center p-4 mb-4 mt-8">
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-2">{item.date}</p>
        <p className="text-gray-700">{item.description}</p>
      </div>
    </div>
  );
};

export default EventListItem;
