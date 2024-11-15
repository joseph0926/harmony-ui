"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@harmony-ui/core";

export const CustomDropdown = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <DropdownMenu
        trigger={
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Open Menu
          </button>
        }
      >
        <DropdownMenuItem onSelect={() => console.log("Profile clicked")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log("Settings clicked")}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => console.log("Logout clicked")}>
          Logout
        </DropdownMenuItem>
      </DropdownMenu>
    </div>
  );
};
