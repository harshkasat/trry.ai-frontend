import Header from '@/components/Header'
import Features from '@/components/Features'
import FlowTable from '@/components/FlowTable'
import { Toaster } from "@/components/ui/toaster"
import { DemoHeroGeometric } from '@/components/Hero'
import { NavbarDemo } from '@/components/ui/navbar'
import {SparklesPreview } from "@/components/ui/code_demo"
import { BentoDemo } from '@/components/Bento-grid'
import { PricingPage } from '@/components/Price-card'
import { FooterDemo } from '@/components/Footer'
import { AnimatedTooltipPreview } from '@/components/ToolTip'
import { FAQ } from '@/components/FAQ'


export default function Home() {
  
  return (
    <main className="min-h-screen">
      {/* <NavBarDemo/> */}
      < NavbarDemo/>
      <DemoHeroGeometric/>
      <BentoDemo/>
      <AnimatedTooltipPreview/>
      <PricingPage/>
      <FAQ/>
      <FooterDemo/>
    </main>
  )
}

