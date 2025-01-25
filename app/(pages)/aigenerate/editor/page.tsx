'use client';

import { SandpackCodeEditor, SandpackFileExplorer, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";



export default function Page() {
  return (
    <SandpackProvider
      template="react"
      options={{
        autorun: false,
        autoReload: false,
        externalResources: ["https://cdn.tailwindcss.com"]
      }}
      files={{
        "/App.js": `export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}`
      }}
    >
      <SandpackLayout style={{ height: "90vh" }}>
        <SandpackFileExplorer style={{ height: '90vh'}} />
        <SandpackCodeEditor
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 14,
            lineHeight: 1.5,
            width: "100%",
            height: "90vh",
          }}
          showTabs
          showLineNumbers={true}
          showInlineErrors
          wrapContent
          closableTabs
        />
        <SandpackPreview style={{ height: '90vh'}} showNavigator />
      </SandpackLayout>
    </SandpackProvider>
  );
}