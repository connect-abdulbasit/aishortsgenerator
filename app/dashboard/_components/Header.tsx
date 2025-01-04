"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";

const Header = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-10 py-5 shadow-md">
      <div className="px-10">
        <h1 className="text-2xl mr-4 font-bold">AI Shorts Generator</h1>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            {user?.imageUrl && (
              <Image
                src={user.imageUrl}
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
                alt={`${user?.fullName || "User"}'s avatar`}
              />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>
              <SignOutButton>Sign Out</SignOutButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
