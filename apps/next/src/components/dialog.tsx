"use client";

import React from "react";
import { Dialog } from "@harmony-ui/core";

export const CustomDialog = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <button>Open Dialog</button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
        </Dialog.Header>
        <div>Content goes here</div>
        <Dialog.Footer>
          <button>Action</button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};
