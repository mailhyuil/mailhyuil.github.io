import { motion } from "framer-motion";
import React from "react";

const Home = () => {
  return (
    <motion.div
      className="h-full bg-hyuil bg-cover flex justify-center items-center font-primary rounded"
      initial={{ x: -100, y: -100 }}
      animate={{ color: "rgb(250,200,0)", x: 0, y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 500 }}>
      <motion.div
        className="bg-white/40 p-10 rounded-xl flex flex-col items-center shadow-xl"
        initial={{ x: -100, y: -100 }}
        animate={{ color: "rgb(250,200,0)", x: 0, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 500 }}>
        <h1 className="font-black lg:text-8xl text-4xl text-gray-800 ">Welcome to My Blog!</h1>
        <h1 className="font-black lg:text-6xl text-2xl text-gray-800 ">
          My Name is&ensp;
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-pink-500/80 p-2 relative inline-block">
            <span className="relative text-white">"Hyuil"</span>
          </span>
          &ensp;!
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default Home;
