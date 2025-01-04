"use client";
import { ProgressDemo } from "@/components/ui/progress-bar";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userId) {
      router.push("/dashboard");
    }
  }, [userId, router]);
  router.push("/sign-in");
  return (
    <>
      <ProgressDemo />
    </>
  );
}
