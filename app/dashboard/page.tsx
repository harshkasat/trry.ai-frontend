import Header from '@/components/Header'
// import Hero from '@/components/Hero'
import Features from '@/components/Features'
import FlowTable from '@/components/FlowTable'
import { Toaster } from "@/components/ui/toaster"
import { SparklesPreview } from "@/components/ui/code_demo" // Import the SparklesPreview component


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Toaster /> */}
      {/* <Header /> */}
      {/* <Hero /> */}
      <SparklesPreview /> {/* Include the SparklesPreview component */}
      {/* <FlowTable />  */}
      {/* <Features /> */}
    </main>
  )
}