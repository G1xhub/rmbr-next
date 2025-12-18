import type { Block } from "@blocknote/core";

export const welcomePageContent: Block[] = [
  {
    id: "welcome-heading",
    type: "heading",
    props: {
      level: 1,
    },
    content: [
      {
        type: "text",
        text: "Welcome to rmbr! 👋",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "welcome-intro",
    type: "paragraph",
    props: {},
    content: [
      {
        type: "text",
        text: "rmbr is your personal workspace for notes, documents, and project management. Here's what you can do:",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "features-list",
    type: "bulletListItem",
    props: {},
    content: [
      {
        type: "text",
        text: "📝 Create rich text documents with the block-based editor",
        styles: {},
      },
    ],
    children: [
      {
        id: "feature-boards",
        type: "bulletListItem",
        props: {},
        content: [
          {
            type: "text",
            text: "📋 Switch to Board view for Kanban-style project management",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "feature-hierarchy",
        type: "bulletListItem",
        props: {},
        content: [
          {
            type: "text",
            text: "🗂️ Organize pages in a hierarchical structure",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "feature-shortcuts",
        type: "bulletListItem",
        props: {},
        content: [
          {
            type: "text",
            text: "⌨️ Use keyboard shortcuts: Cmd+N (new page), Cmd+B (toggle sidebar)",
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: "getting-started",
    type: "heading",
    props: {
      level: 2,
    },
    content: [
      {
        type: "text",
        text: "Getting Started",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "start-instructions",
    type: "paragraph",
    props: {},
    content: [
      {
        type: "text",
        text: "Try editing this page, create new pages in the sidebar, or switch to Board view using the toggle in the top toolbar.",
        styles: {},
      },
    ],
    children: [],
  },
];