import Header from '@/components/Header'
import Features from '@/components/Features'
import FlowTable from '@/components/FlowTable'
import { Toaster } from "@/components/ui/toaster"
import { DemoHeroGeometric } from '@/components/Hero'
import { NavBarDemo } from '@/components/ui/navbar'
import {SparklesPreview } from "@/components/ui/code_demo"
import { BentoDemo } from '@/components/Bento-grid'


export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBarDemo/>      
      <DemoHeroGeometric/>
      <BentoDemo/>
    </main>
  )
}

