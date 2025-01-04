"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Duration = ({
  updateFromData,
}: {
  updateFromData: (key: string, value: string) => void;
}) => {
  return (
    <>
      <div className=" m-10 py-5">
        <div className="mb-2">
          <h1 className="font-bold text-xl "> Duration</h1>
          <p className="text-gray-500">Select the duration of the video</p>
        </div>

        <Select onValueChange={(value) => updateFromData("duration", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Duration Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"30"}>30 secs</SelectItem>
            <SelectItem value={"60"}>60 secs</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Duration;
