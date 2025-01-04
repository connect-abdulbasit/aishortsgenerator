"use client";
import { SignOutButton, useAuth, useUser } from "@clerk/nextjs";
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
import { useSidebar } from "./sidebar";
// import { SidebarTrigger } from "./sidebar";

const Header = () => {
  const { user } = useUser();
  const { userId } = useAuth();
  const { open } = useSidebar();
  return (
    <div className="flex py-5 shadow-md w-full ">
      {/* <SidebarTrigger /> */}
      <div
        className={`flex items-center px-10 w-full ${
          userId && open ? "justify-end" : "justify-between"
        } `}
      >
        <div className=" flex gap-2 px-10">
          {!open && (
            <h1 className="text-2xl mr-4 font-bold">AI Shorts Generator</h1>
          )}
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />

          {userId && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
