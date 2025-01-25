"use client"

import type React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DeleteAiGeneratedDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  workflowName: string
  workflowId: string
}

const DeleteAiGeneratedDialog: React.FC<DeleteAiGeneratedDialogProps> = ({
  open,
  setOpen,
  workflowName,
  workflowId,
}) => {
  const handleDelete = async () => {
    // Implement your delete logic here
    console.log(`Deleting workflow: ${workflowId}`)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Workflow</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the workflow "{workflowName}"? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteAiGeneratedDialog