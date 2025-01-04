"use client";
import {
  Calendar,
  // ChevronUp,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./sidebar";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import {
  DropdownMenu,
  // DropdownMenuContent,
  // DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Create New",
    url: "/new",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { user } = useUser();

  return (
    <Sidebar>
      <SidebarHeader className="font-bold text-2xl py-6 ">
        AI Shorts Generator
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent className="py-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-4 px-2 py-2">
          {user?.imageUrl && (
            <Image
              src={user.imageUrl}
              width={40}
              height={40}
              className=" cursor-pointer"
              alt={`${user?.fullName || "User"}'s avatar`}
            />
          )}
          <div className="flex flex-col">
            <span className="font-bold">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <SidebarMenuButton>
                    <User2 /> {user?.fullName}
                    {/* <ChevronUp className="ml-auto" /> */}
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                {/* <DropdownMenuContent side="top">
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent> */}
              </DropdownMenu>
            </span>
            <span className="text-xs">
              {user?.primaryEmailAddress?.emailAddress}
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
