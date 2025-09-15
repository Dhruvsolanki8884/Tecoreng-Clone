import React from 'react'

function FlexibleSection() {
  return (
    <div className='bg-[#0d1434] text-white py-16 px-8'>
      {/* Header */}
      <div className='max-w-6xl mx-auto mb-8'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6'>
          Our Flexible Engagement Models
        </h1>
        <p className='text-lg text-gray-300 leading-relaxed max-w-4xl'>
          Our team is your partner for the next big digital leap. Our customized and highly flexible engagement models are designed to meet business objectives. All of our service engagements are focused on customer satisfaction, and we ensure that clear communication is maintained throughout.
        </p>
      </div>

      {/* Cards Container */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
        

{/* Card 1 - Hire Full-time Developer */}
        <div className='bg-[#e8eaf6] text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden'>
          {/* Gradient overlay that slides down on hover */}
          <div className='absolute inset-0 bg-gradient-to-b from-[#3f51b5] via-[#5c6bc0] to-[#7986cb] rounded-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out'></div>
          
          <div className='relative z-5 mb-4'>
            <h2 className='text-xl font-bold text-center py-3 mb-4 group-hover:text-white transition-colors duration-500'>
              Hire Full-time Developer
            </h2>
          </div>
          <p className='relative z-10 text-gray-700 leading-relaxed group-hover:text-white transition-colors duration-500'>
            Looking for committed talent to drive your company's success? Our full-time dedicated developers bring expertise, reliability, and unwavering focus to your projects. With a rigorous selection process, we ensure you get top talent aligned with your goals.
          </p>
        </div>

        {/* Card 2 - Hire Part-time Developer */}
        <div className='bg-[#e8eaf6] text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden'>
          {/* Gradient overlay that slides down on hover */}
          <div className='absolute inset-0 bg-gradient-to-b from-[#3f51b5] via-[#5c6bc0] to-[#7986cb] rounded-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out'></div>
          
          <div className='relative z-10 mb-4'>
            <h2 className='text-xl font-bold text-center py-3 mb-4 relative group-hover:text-white transition-colors duration-500'>
              Hire Part-time Developer
              {/* Red dot indicator */}
              <span className='absolute -top-1 right-1/2 transform translate-x-1/2 w-2 h-2  rounded-full'></span>
            </h2>
          </div>
          <p className='relative z-10 text-gray-700 leading-relaxed group-hover:text-white transition-colors duration-500'>
            Need flexibility without compromising quality? Our part-time dedicated developers offer the perfect solution. Get skilled assistance on your schedule, ensuring progress without the commitment of a full-time hire.
          </p>
        </div>

       
        <div className='bg-[#e8eaf6] text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden'>
        
          <div className='absolute inset-0 bg-gradient-to-b from-[#3f51b5] via-[#5c6bc0] to-[#7986cb] rounded-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out'></div>
          
          <div className='relative z-10 mb-4'>
            <h2 className='text-xl font-bold text-center py-3 mb-4 group-hover:text-white transition-colors duration-500'>
              Professional Services
            </h2>
          </div>
          <p className='relative z-10 text-gray-700 leading-relaxed group-hover:text-white transition-colors duration-500'>
            Unlock your project's full potential with our professional services. From software development to project management, our experts deliver tailored solutions to drive growth and efficiency, no matter your industry or scale.
          </p>
        </div>



      </div>
    </div>
  )
}

export default FlexibleSection



