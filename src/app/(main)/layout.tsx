import { NavBar } from "@/components/NavBar";
import { Providers } from "@/providers/Providers";
import React, { PropsWithChildren } from "react";

export const revalidate = 0;

export default function layout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <NavBar />
      <main className="h-main-content flex flex-col max-w-6xl mx-auto grow">
        {children}
      </main>
    </Providers>
  );
}
