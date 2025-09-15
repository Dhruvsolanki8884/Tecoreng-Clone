import React from 'react';

function BallSection() {
  return (
    <div className='bg-[#0e1a43] text-white overflow-hidden py-16 px-8 md:px-16 lg:px-24 relative'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between'>
        <div className='lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0'>
          <h1 className='font-medium text-4xl sm:text-5xl lg:text-6xl leading-tight'>
            Transfer your <br /> enterprise with digital <br /> innovation
          </h1>
          <p className='mt-8 text-base sm:text-lg leading-relaxed'>
            Your success as a market innovator reflects our strides as a unified partner.
            Committed to assisting you in attaining excellence through our solutions, we
            boast a team of adept professionals and dynamic facilitators. Our steadfast
            commitment to a collaborative strategy, coupled with agile methodologies,
            propels business expansion. Rely on our strategic insights and development
            processes, and we will fuel your concepts to manifest as groundbreaking
            disruptions.
          </p>
          <div className='mt-10'>
            <button className='bg-gradient-to-r from-[#e78e6e] to-[#FF3B1F] hover:from-[#E05F2D] hover:to-[#FF1F00] text-white font-bold text-2xl py-4 px-10 rounded-4xl shadow-sm shadow-[#F76D3B]/50 transition-all duration-300 ease-in-out'>
              HIRE NOW
            </button>
          </div>
        </div>

        <div className='lg:w-1/2 flex justify-center lg:justify-end relative'>
      
          <img 
            src='https://tecoreng.com/_next/static/media/infinite.c057ea68.webp' 
            alt='Digital Innovation' 
            className='w-full max-w-lg h-auto object-contain'
          />

          <img 
            src='https://tecoreng.com/_next/static/media/ball.9fdf93ca.webp' 
            alt='Animated Ball' 
            className='absolute top-1/2 left-1/2 -mt-4 -ml-4 w-8 h-8 rounded-full animate-path-move' 
            style={{ transform: 'translate(-100px, 0)' }}
          />
        </div>
      </div>
    </div>
  );
}

export default BallSection;