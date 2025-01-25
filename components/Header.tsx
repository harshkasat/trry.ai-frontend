import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-white"></div>
        <span className="text-xl font-bold">TrryFix</span>
      </div>
      <Button variant="outline" className="text-black border-white">
        Sign In
      </Button>
    </header>
  )
}

