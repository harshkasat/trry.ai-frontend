import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import FlowTable from '@/components/FlowTable'
import { Toaster } from "@/components/ui/toaster"
import {SparklesPreview } from "@/components/ui/code_demo"
import { HeaderDemo } from "@/components/ui/code_demo" // Import the HeaderDemo component


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderDemo/>
      <SparklesPreview/>
    </main>
  )
}

