"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@harmony-ui/core";

export const DialogDefault = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 rounded bg-primary-500 text-white">
          Open Dialog
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Example Dialog</DialogTitle>
          <DialogDescription>
            This is a sample dialog demonstrating the animation capabilities of
            Harmony UI.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Dialog content goes here...</p>
        </div>
        <DialogFooter>
          <button className="px-4 py-2 rounded bg-gray-200">Cancel</button>
          <button className="px-4 py-2 rounded bg-primary-500 text-white ml-2">
            Save
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const DialogLongContent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 rounded bg-primary-500 text-white">
          Open Long Dialog
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Scrollable Dialog</DialogTitle>
          <DialogDescription>
            This dialog demonstrates how scrolling works with animations.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i}>
              Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          ))}
        </div>
        <DialogFooter>
          <button className="px-4 py-2 rounded bg-gray-200">Cancel</button>
          <button className="px-4 py-2 rounded bg-primary-500 text-white ml-2">
            Save
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const DialogNested = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 rounded bg-primary-500 text-white">
          Open Parent Dialog
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Parent Dialog</DialogTitle>
          <DialogDescription>
            This dialog contains another dialog to test nested animations.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Dialog>
            <DialogTrigger asChild>
              <button className="px-4 py-2 rounded bg-secondary-500 text-white">
                Open Child Dialog
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Child Dialog</DialogTitle>
                <DialogDescription>
                  This is a nested dialog with its own animations.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <button className="px-4 py-2 rounded bg-gray-200">Close</button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <DialogFooter>
          <button className="px-4 py-2 rounded bg-gray-200">
            Close Parent
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
