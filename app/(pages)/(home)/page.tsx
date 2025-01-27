'use client';

import ListCard from "./_components/ListCard";
import { useToast } from "@/hooks/use-toast";


export default function Home() {
  const { toast } = useToast();
  return (
    <>
      <ListCard />
    </>
  );
}