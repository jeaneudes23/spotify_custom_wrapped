import { NavBar } from "@/components/NavBar";
import { Providers } from "@/providers/Providers";
import React, { PropsWithChildren } from "react";

export const revalidate = 0;

export default function layout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <NavBar />
      <div className="flex grow h-main-content">
        <main className="flex flex-col grow">{children}</main>
      </div>
    </Providers>
  );
}
