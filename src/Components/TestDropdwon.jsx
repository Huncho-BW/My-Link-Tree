import React from "react";
import * as Select from "@radix-ui/react-select";

export default function TestDropdown() {
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Value placeholder="Select a platform" />
        <Select.Icon>▼</Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Viewport></Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
