"use client";

import React from "react";
import { Sheet } from "@harmony-ui/core";

export const CustomSheet = () => {
  return (
    <Sheet direction="bottom">
      <Sheet.Trigger asChild>
        <button>Open Sheet</button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Sheet Title</Sheet.Title>
          <Sheet.Description>
            This is a description of the sheet.
          </Sheet.Description>
        </Sheet.Header>
        <div>Your content here</div>
        <Sheet.Footer>
          <button>Action</button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  );
};
