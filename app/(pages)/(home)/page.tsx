'use client';

import GeminiPrompt from "@/components/GeminiPrompts";
import { SandpackCodeEditor, SandpackFileExplorer, SandpackLayout, SandpackPreview, SandpackProvider, SandpackTheme } from "@codesandbox/sandpack-react";



export default function Home() {
  return (
    <>
      <GeminiPrompt />
    </>
  );
}