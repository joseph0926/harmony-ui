"use client";

import React from "react";
import { Sheet } from "@harmony-ui/core";

export const CustomSheet = () => {
  return (
    <Sheet
      trigger={
        <button className="px-4 py-2 bg-green-600 text-white rounded-md">
          Open Sheet
        </button>
      }
    >
      <SheetContent />
    </Sheet>
  );
};

const SheetContent = () => (
  <div>
    <h2 className="text-xl font-semibold">Sheet Title</h2>
    <p className="mt-2">This is the content of the sheet.</p>
    <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md">
      Close
    </button>
  </div>
);
