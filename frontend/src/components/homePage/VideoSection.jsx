import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const VideoSection = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section
      id="video-tour"
      className="relative w-full h-screen bg-gray-100 text-white"
    >
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-blue-900 md:text-5xl font-bold mb-4"
        >
          Take a Campus Tour
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl"
        >
          Experience our vibrant campus, cutting-edge facilities, and dynamic
          student life through this immersive video.
        </motion.p>

        <div className="relative aspect-video w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/yAU87wa5PkA?si=8OjPWXFe3ZBlMC5S" 
            title="Campus Tour"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
