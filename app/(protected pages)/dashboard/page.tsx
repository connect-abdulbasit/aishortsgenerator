"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-between m-12">
      <div>Dashboard</div>
      <Button
        onClick={() => {
          window.location.href = "/new";
        }}
      >
        Create New
      </Button>
    </div>
  );
};

export default Page;
