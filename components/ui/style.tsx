import Image from "next/image";
import React, { useState } from "react";

const Style = ({
  updateFromData,
}: {
  updateFromData: (key: string, value: string) => void;
}) => {
  const styleOptions = [
    {
      id: 1,
      value: "Realistic",
      src: "/real.png",
    },
    {
      id: 2,
      value: "Cartoon",
      src: "/cartoon.jpg",
    },
    {
      id: 3,
      value: "GTA",
      src: "/GTA.png",
    },
    {
      id: 4,
      value: "Comics",
      src: "/comics.jpeg",
    },
    {
      id: 5,
      value: "Watercolor",
      src: "/watercolor.jpeg",
    },
  ];

  const [style, setStyle] = useState<string>("");

  return (
    <div className=" m-10 py-5">
      <div className="mb-2">
        <h1 className="font-bold text-xl "> Style</h1>
        <p className="text-gray-500">Select the style of the video</p>
      </div>
      <div className="flex gap-4 flex-wrap">
        {styleOptions.map((option) => (
          <div
            key={option.id}
            className={`cursor-pointer rounded-lg transition-all duration-300 ease-in-out relative border border-gray-200 hover:border-gray-300 hover:scale-105 hover:shadow-md`}
            onClick={() => {
              updateFromData("style", option.value);
              setStyle(option.value);
            }}
          >
            <Image
              src={option.src}
              width={100}
              height={100}
              alt={option.value}
              className="h-40 w-full rounded-t-lg"
            />
            <div
              className={`text-center p-2 rounded-b-lg transition-all duration-300 ease-in-out ${
                style === option.value
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              {option.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Style;
