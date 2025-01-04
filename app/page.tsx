"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, useAuth } from "@clerk/nextjs";
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

  return (
    <>
      <div className="flex m-10">
        (
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
        )
      </div>
    </>
  );
}
