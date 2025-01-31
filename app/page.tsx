import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import FlowTable from '@/components/FlowTable'
import { Toaster } from "@/components/ui/toaster"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Toaster />
      <Header />
      <Hero />
      <FlowTable /> 
      <Features />
    </main>
  )
}

