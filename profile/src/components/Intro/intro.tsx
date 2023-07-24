import React, { useEffect, useState } from "react";

const kanishkProperties = ["create", "design", "guide", "develop"];

const mappedSentence = ["WebApps", "Solutions", "& lead team", "Microservices"];
export const Intro = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const setRandom = () => {
    if (currentIndex === 3) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    return;
  };

  useEffect(() => {
    setTimeout(() => setRandom(), 1000);
  }, [currentIndex]);

  return (
    <div className="flex flex-col space-y-3 mt-20 justify-start md:ml-[18vw] max-md:ml-6 font-roboto-slab font-[200]">
      <div className="text-4xl">Hey, Kanishk here!</div>
      <div className="text-3xl">
        I <span className="italic">{kanishkProperties[currentIndex]}</span>{" "}
        {mappedSentence[currentIndex]}
      </div>
    </div>
  );
};
