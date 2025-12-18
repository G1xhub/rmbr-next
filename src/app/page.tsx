"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { PageView } from "@/components/layout/PageView";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";

export default function Home() {
  useKeyboardShortcuts();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <PageView />
    </div>
  );
}
