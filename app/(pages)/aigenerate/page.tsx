'use client';

import AiGeneratedCard from "./_components/AiGeneratedCard";

export default function Page() {

  const workflow = [
    {
      id: "1",
      name: "Workflow 1",
      description: "This is a description for workflow 1",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
    },
    {
      id: "2",
      name: "Workflow 2",
      description: "This is a description for workflow 2",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
    },
    {
      id: "3",
      name: "Workflow 3",
      description: "This is a description for workflow 3",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
    }
  ]

  
  
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      {workflow.map((workflow) => (
      <AiGeneratedCard key={workflow.id} workflow={workflow} />    

      ))}
    </div>

  );
}
