"use client";

import React from "react";
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
} from "../../../@/components/ui/sidebar.jsx";
import { Button } from "../../../@/components/ui/button.jsx";
import {
  Book,
  Compass,
  LayoutDashboardIcon,
  UserCircle2Icon,
  BrainCircuit
} from "lucide-react";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import AddNewCourseDialog from "../_components/AddNewCourseDialog.jsx";

const SidebarOptions = [
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    path: "/workspace",
  },
  {
    title: "My Learning",
    icon: Book,
    path: "/workspace/my-learning",
  },
  {
    title: "Explore Courses",
    icon: Compass,
    path: "/workspace/explore",
  },
  {
    title: "Profile",
    icon: UserCircle2Icon,
    path: "/workspace/profile",
  },
];

function AppSidebar() {
  const path = usePathname();

  const isActive = (itemPath) => {
    if (itemPath === "/workspace") {
      return path === itemPath;
    }
    return path.startsWith(itemPath);
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-6 border-b border-gray-100 mb-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <BrainCircuit className="text-white w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-gray-900">
            Acadex<span className="text-indigo-600">.</span>
          </h2>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <AddNewCourseDialog>
            <Button className="w-full">Create New Course</Button>
          </AddNewCourseDialog>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SidebarOptions.map((item, index) => {
                const active = isActive(item.path);
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild className="p-1">
                      <Link
                        href={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[16px] transition-all font-medium
                          ${active
                            ? "bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
                      >
                        <item.icon
                          className={`h-5 w-5 ${active ? "text-indigo-600" : "text-gray-400"}`}
                        />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
