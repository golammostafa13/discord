import React from "react";

const Cards = ({ data }) => {
 if ( !data ) {
    return <div className="flex justify-center items-center text-green-500 font-bold text-xl">Comming Soon....</div>
 }
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {data.map((card) => (
        <div key={card} className="card flex flex-col justify-center p-4 bg-gray-600 space-y-4">
          <img
            className="relative rounded-lg h-64 w-80 overflow-hidden object-cover mx-auto"
            src={card.image}
            alt="diagram"
          />
          <div className="px-4 py-2 text-center">
            <p className="text-gray-100">{card.description} {card.name}</p>
          </div>
          <div className="flex justify-around">
            <a href={card.code} target="_blank" rel="noreferrer" className="text-green-400 text-lg font-bold border-2 cursor-pointer px-6 py-1 border-solid border-green-600 hover:bg-green-500 hover:text-white flex items-center gap-1 focus:bg-green-500 focus:text-white">
              Code
            </a>
            <button className="text-green-400 text-lg font-bold border-2 px-6 py-1 border-solid border-green-600 hover:bg-green-500 hover:text-white flex items-center gap-1 focus:bg-green-500 focus:text-white">
              Live
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
