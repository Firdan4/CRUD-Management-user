import React from "react";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col gap-10">{children}</div>
  );
}
