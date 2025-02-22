import { HeroGeometric } from "@/components/ui/hero"
import { div } from "framer-motion/client";

const heroBackground = (
  <div
      className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-50"
  />
);
function HeroSection() {
  return (
    <div className="mb-2">
      <HeroGeometric badge="Your Personal Assistant to manage website Testing"
            title1 = "Sample"
            title2 = "Sample"
            title3="Something is cooking"
             />
    </div>
  )
}

export { HeroSection as DemoHeroGeometric, heroBackground}