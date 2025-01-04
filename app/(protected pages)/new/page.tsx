"use client";
import { Button } from "@/components/ui/button";
import Content from "@/components/ui/content";
import Duration from "@/components/ui/duration";
import Style from "@/components/ui/style";
import React, { useState } from "react";

const Page = () => {
  interface FormDataType {
    content?: string;
    style?: string;
    duration?: string;
  }
  const [formData, setFormData] = useState<FormDataType>({});
  const updateFromData = (key: string, value: string) => {
    setFormData((prevFormData) => ({ ...prevFormData, [key]: value }));
  };
  const handleSubmit = () => {
    if (formData.content && formData.style && formData.duration) {
      console.log(formData);
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <>
      <div className="shadow-md m-10 pl-10 py-5">
        <div className="text-2xl font-bold pt-10 pl-10">
          Create New Short Video
        </div>
        {/* Content */}
        <Content updateFromData={updateFromData} />
        {/* Style */}
        <Style updateFromData={updateFromData} />
        {/* Duration */}
        <Duration updateFromData={updateFromData} />
        {/* Submit Button */}
        <div className=" mx-10 px-10 flex justify-end">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </>
  );
};

export default Page;
