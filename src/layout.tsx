import React from "react";
import FormUser from "./components/form/FormUser";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col gap-10">
      <FormUser />
      {children}
    </div>
  );
}
