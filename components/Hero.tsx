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
            title1 = "Elevate Your"
            title2 = "Digital Vision"
            title3="This something noice i ever seen"
             />
    </div>
  )
}

export { HeroSection as DemoHeroGeometric, heroBackground}