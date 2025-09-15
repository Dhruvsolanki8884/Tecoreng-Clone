import React, { useState } from 'react';
import { Play } from 'lucide-react'; // npm i lucide-react

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="bg-primary py-10 px-4">
      <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden">
        {/* Video */}
        <video
          className="w-full h-auto"
          autoPlay={isPlaying}
          muted
          playsInline
          loop
        >
          <source
            src="https://tecoreng.com/videos/Tecoreng_fullVideo.mp4"
            type="video/mp4"
          />
        </video>

        {/* Play / Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-4 right-4 bg-[#0A1128] hover:bg-white/40 text-white rounded-full p-4 backdrop-blur-md transition"
        >
          <Play className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default VideoSection;
