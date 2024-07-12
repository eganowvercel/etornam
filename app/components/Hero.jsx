import React from 'react';

const Hero = () => {
    return (
        <div className="flex flex-col  items-center justify-between p-6 md:h-[80vh] h-[50vh] hero-bg" id='home'>
            <div className="flex-1  text-center w-full grid place-content-center text-white mt-4 md:mt-0 z-20" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="text-3xl md:text-8xl font-bold drop-shadow-lg">ETORNAM JAMES FLOLU</h1>
                <p className="text-sm md:text-xl text-white drop-shadow-lg mb-4">Your contribution is vital in shaping a brighter future. Join us in making a difference today.</p>
                <a href="#donate" >
                    <button className='h-fit px-10 py-4 bg-red-600 rounded-full mr-4 hover:bg-blue-900'>Donate</button>
                </a>
            </div>
        </div>
    );
};

export default Hero;
