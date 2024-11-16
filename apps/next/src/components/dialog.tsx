// CustomDialog.tsx

"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "@harmony-ui/core";
import { cn } from "@/lib/utils";

export const CustomDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Functions to handle opening and closing the dialog
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openDialog}
        className={cn(
          "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        )}
      >
        Open Dialog
      </button>

      {/* Dialog Component */}
      <Dialog
        isOpen={isOpen}
        onClose={closeDialog}
        closeOnOutsideClick={true}
        closeOnEsc={true}
      >
        {/* Overlay */}
        <DialogOverlay />

        {/* Content */}
        <DialogContent className="max-w-lg">
          {/* Close Button */}
          <DialogClose />

          {/* Header: Title and Description */}
          <div className="mb-4">
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog. It provides additional
              context and information to the user.
            </DialogDescription>
          </div>

          {/* Main Content */}
          <div className="mb-4">
            <p>
              Here is the main content of the dialog. You can place any
              information or components you need here.
            </p>
          </div>

          {/* Footer: Action Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              onClick={closeDialog}
              className={cn(
                "px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              )}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Perform some action here
                alert("Action performed!");
                closeDialog();
              }}
              className={cn(
                "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              )}
            >
              Confirm
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
