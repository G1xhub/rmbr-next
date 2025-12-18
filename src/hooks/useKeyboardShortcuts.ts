import { useEffect } from "react";
import { useWorkspaceStore } from "@/stores/workspace";

export function useKeyboardShortcuts() {
  const { createPage, toggleSidebar } = useWorkspaceStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K for search (placeholder)
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        console.log("Search shortcut - to be implemented");
      }

      // Cmd/Ctrl + N for new page
      if ((e.metaKey || e.ctrlKey) && e.key === "n") {
        e.preventDefault();
        createPage();
      }

      // Cmd/Ctrl + \ to toggle sidebar
      if ((e.metaKey || e.ctrlKey) && e.key === "\\") {
        e.preventDefault();
        toggleSidebar();
      }

      // Cmd/Ctrl + B to toggle sidebar (alternative)
      if ((e.metaKey || e.ctrlKey) && e.key === "b") {
        e.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [createPage, toggleSidebar]);
}
