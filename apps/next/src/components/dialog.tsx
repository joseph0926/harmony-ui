"use client";

import React from "react";
import { Dialog } from "@harmony-ui/core";

export const CustomDialog = () => {
  return (
    <Dialog
      trigger={
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Open Dialog
        </button>
      }
    >
      <DialogContent />
    </Dialog>
  );
};

const DialogContent = () => (
  <div>
    <h2 className="text-xl font-semibold">Dialog Title</h2>
    <p className="mt-2">This is the content of the dialog.</p>
    <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md">
      Close
    </button>
  </div>
);
