import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function ToDo() {
  return (
    <div className="h-[61px] w-[308px] flex items-center justify-between p-[20px]">
      <Checkbox />
      <div >
        Do something
        <span>tap to learn more</span>
      </div>
    </div>
  );
}
