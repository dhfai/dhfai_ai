'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { SandpackCodeEditor, SandpackFileExplorer, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react"
import Link from "next/link"


const ListProjectData = [
  {
    id: 1,
    name: "Simple Notes",
    description: "A simple note app",
    languages: ["Next.js", "Typescript"],
  },
  {
    id: 2,
    name: "Wheater App",
    description: "A simple wheater app",
    languages: ["React"],
  },
  {
    id: 3,
    name: "Algorithm Naive Bayes",
    description: "A simple algorithm",
    languages: ["Python"]
  },
  {
    id: 4,
    name: "Simple Notes",
    description: "A simple note app",
    languages: ["Next.js", "Typescript"],
  },
  {
    id: 5,
    name: "Wheater App",
    description: "A simple wheater app",
    languages: ["React"],
  },
  {
    id: 6,
    name: "Algorithm Naive Bayes",
    description: "A simple algorithm",
    languages: ["Python"]
  }
]

export default function ListProject() {
  return (
    <div className="flex">
      <ScrollArea className="h-auto w-72 rounded-l-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">List Project</h4>
          <Separator className="mb-3" />
          {ListProjectData.map((project) => (
            <div key={project.id} className="mb-4">
                <Link href='/aigenerate/editor' className="hover:underline">
                  <h4 className="text-sm font-medium">{project.name}</h4>
                </Link>
                <p className="text-xs text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.languages.map((language) => (
                    <span key={language} className="px-2 py-1 text-xs bg-violet-100 text-muted-foreground rounded-md">
                      {language}
                    </span>
                  ))}
                </div>
                <Separator className="my-4" />
              </div>
          ))}
        </div>
      </ScrollArea>

      <SandpackProvider
        template="react"
        options={{
          autorun: true,
          autoReload: true
        }}
        style={{
          width: '100%'
        }}
      >
        <SandpackLayout style={{ height: "90vh" }}>
          <SandpackPreview style={{ height: '90vh'}} showNavigator />
        </SandpackLayout>
      </SandpackProvider>
    </div>

  )
}