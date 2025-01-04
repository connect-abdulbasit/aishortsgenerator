"use client";
import { Button } from "@/components/ui/button";
import Content from "@/components/ui/content";
import Duration from "@/components/ui/duration";
import Style from "@/components/ui/style";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  interface FormDataType {
    content?: string;
    style?: string;
    duration?: string;
  }

  const [formData, setFormData] = useState<FormDataType>({});
  const [submitting, setSubmitting] = useState(false);

  const updateFromData = (key: string, value: string) => {
    setFormData((prevFormData) => ({ ...prevFormData, [key]: value }));
  };

  const handleSubmit = async () => {
    if (formData.content && formData.style && formData.duration) {
      setSubmitting(true);
      const prompt = `Write a short video on topic ${formData.content} with ${formData.style} style and duration in ${formData.duration} seconds video format with imagePrompt and contentText as field names\n`;
      try {
        const response = await fetch("/api/create-script", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error submitting the form:", error);
      } finally {
        setSubmitting(false);
      }
    } else {
      toast("Please fill all the fields");
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
        <div className="mx-10 px-10 flex justify-end">
          <Button onClick={handleSubmit} disabled={submitting}>
            {submitting && <Loader2 className="animate-spin" />}
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
