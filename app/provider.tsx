"use client";
import { db } from "@/configs/db.config";
import { Users } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { ReactNode, useEffect } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  useEffect(() => {
    const isUserNew = async () => {
      const userDetail = await db
        .select()
        .from(Users)
        .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress || ""));

      if (userDetail.length === 0) {
        await db.insert(Users).values({
          email: user?.primaryEmailAddress?.emailAddress || "",
          name: user?.firstName || "",
          imageURL: user?.imageUrl || "",
          username: user?.username || "",
        });
      }
    };
    if (user) {
      isUserNew();
    }
  }, [user]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Provider;
