"use client";

import React from "react";

export function BubbleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <div
        className="blob bg-amber-200/70 w-[400px] h-[400px] top-[-80px] left-[-80px]"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="blob bg-orange-200/60 w-[450px] h-[450px] top-[35%] right-[-100px]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="blob bg-yellow-200/70 w-[420px] h-[420px] bottom-[-100px] left-[15%]"
        style={{ animationDelay: "-10s" }}
      />
    </div>
  );
}
