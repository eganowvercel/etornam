import Image from 'next/image';
import React from 'react';

function NewsCard({ image, title, date, description }) {
  return (
    <div className="rounded overflow-hidden shadow-lg z-20" data-aos="fade-up" data-aos-duration="2000">
      <img className="w-full h-full object-cover" src={image} alt={title} width={100} height={100} />
      {/* <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{date}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div> */}
    </div>
  );
}

export default NewsCard;
