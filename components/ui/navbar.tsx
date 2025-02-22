'use client'
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { SignupComponent } from '../Signup'

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText },
    { name:'Signup', icon: User, render:<SignupComponent/>}
    // {name: 'Signup', url:'#', icon: User
  ]

  return <NavBar items={navItems} />
}