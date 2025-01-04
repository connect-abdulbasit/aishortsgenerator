"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Content = ({
  updateFromData,
}: {
  updateFromData: (key: string, value: string) => void;
}) => {
  const contentTypes = [
    "Custom Type",
    "Horror",
    "Random Story",
    "Funny Story",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Adventure",
    "Non Fiction",
  ];
  const [contentType, setContentType] = useState<string>("");

  const handleSelectChange = (value: string) => {
    setContentType(value);
    if (value !== "Custom Type") {
      updateFromData("content", value);
    }
  };

  return (
    <>
      <div className=" m-10 py-5">
        <div className="mb-2">
          <h1 className="font-bold text-xl "> Content</h1>
          <p className="text-gray-500">Select a content type</p>
        </div>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Content Type" />
          </SelectTrigger>
          <SelectContent>
            {contentTypes.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {contentType === "Custom Type" && (
          <div className="mt-2">
            <Textarea
              className="w-full"
              placeholder="Enter your custom content"
              onChange={(e) => updateFromData("content", e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
