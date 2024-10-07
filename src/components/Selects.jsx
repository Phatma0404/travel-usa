import React from "react";
import SelectsCard from "./SelectsCard";
const Selects = () => {
  return (
   <div name="travel">
    <h1 className="text-center uppercase">Also Travel</h1>
     <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard
        bg="https://i.pinimg.com/564x/ec/7b/5c/ec7b5c0672d6240e36685628258a3b11.jpg"
        text="California"
      />
      <SelectsCard
        bg="https://i.pinimg.com/564x/eb/53/7e/eb537e77c59fbd2c8a5e8917c8f4a5e7.jpg"
        text="Chicago"
      />
      <SelectsCard
        bg="https://i.pinimg.com/564x/9b/f3/e3/9bf3e397a0569a34408a47408cea5c87.jpg"
        text="Florida"
      />
      <SelectsCard
        bg="https://i.pinimg.com/564x/bb/6a/0d/bb6a0d9a1d610497bdf9d5c3635845e8.jpg"
        text="Washington"
      />
      <SelectsCard
        bg="https://i.pinimg.com/564x/51/42/fc/5142fc342dc9117283884273a62d5cf1.jpg"
        text="Hawaii"
      />
      <SelectsCard
        bg="https://i.pinimg.com/564x/d5/77/8b/d5778b5e10315a75de9d841e686898f1.jpg"
        text="Nevada"
      />
    </div>
   </div>
  );
};

export default Selects;
