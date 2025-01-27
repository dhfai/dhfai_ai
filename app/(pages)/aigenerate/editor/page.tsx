'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SandpackCodeEditor, SandpackFileExplorer, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import { Code2, Monitor } from "lucide-react";



export default function Page() {
  return (
    <SandpackProvider
      template="react"
      options={{
        autorun: true,
        autoReload: true,
      }}
     >
      <div className="border-b">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="h-11 w-full justify-start rounded-none bg-background px-4 border-b border-b-transparent">
            <TabsTrigger
              value="code"
              className="data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
            >
              <Code2 className="mr-2 h-4 w-4" />
              Code
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
            >
              <Monitor className="mr-2 h-4 w-4" />
              Preview
            </TabsTrigger>
          </TabsList>
          <TabsContent value="code">
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
          </SandpackLayout>
          </TabsContent>
          <TabsContent value="preview">
            <SandpackLayout style={{ height: "90vh" }}>
              <SandpackPreview style={{ height: '90vh'}} showNavigator />
            </SandpackLayout>
          </TabsContent>
        </Tabs>     
      </div>
    </SandpackProvider>
  );
}