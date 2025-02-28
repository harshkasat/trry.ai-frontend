"use client"

import {
  Bell,
  ChevronDown,
  CreditCard,
  DollarSign,
  Home,
  Layers,
  LayoutDashboard,
  LogOut,
  Plus,
  Settings,
  User,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        {/* Fixed width sidebar with proper spacing */}
        <Sidebar className="w-64 border-r bg-white">
          <SidebarHeader className="border-b py-4">
            <div className="flex items-center gap-3 px-6">
              <Layers className="h-6 w-6" />
              <span className="font-semibold text-xl">Acme Inc</span>
            </div>
          </SidebarHeader>
          <SidebarContent className="flex flex-col py-6">
            <SidebarMenu className="flex-1 space-y-1 px-3">
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full">
                  <Link href="#" className="flex h-10 items-center rounded-md px-3 py-2 hover:bg-gray-100">
                    <LayoutDashboard className="mr-3 h-5 w-5" />
                    <span className="text-sm font-medium">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full">
                  <Link href="#" className="flex h-10 items-center rounded-md px-3 py-2 hover:bg-gray-100">
                    <Home className="mr-3 h-5 w-5" />
                    <span className="text-sm font-medium">Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full">
                  <Link href="#" className="flex h-10 items-center rounded-md px-3 py-2 hover:bg-gray-100">
                    <CreditCard className="mr-3 h-5 w-5" />
                    <span className="text-sm font-medium">Billing</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full">
                  <Link href="#" className="flex h-10 items-center rounded-md px-3 py-2 hover:bg-gray-100">
                    <Settings className="mr-3 h-5 w-5" />
                    <span className="text-sm font-medium">Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="mt-auto border-t py-4">
            <SidebarMenu className="px-3">
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="flex w-full items-center justify-between rounded-md px-3 py-2 hover:bg-gray-100">
                      <div className="flex items-center">
                        <Image 
                          src="/placeholder-user.jpg" 
                          alt="User" 
                          width={32} 
                          height={32} 
                          className="mr-3 rounded-full" 
                        />
                        <span className="text-sm font-medium">John Doe</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Main content with improved layout */}
        <div className="flex flex-1 flex-col">
          <header className="flex h-16 items-center border-b bg-white px-6">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="ml-auto flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button className="h-9">
                <Plus className="mr-2 h-4 w-4" /> New Project
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6">
            {/* Stat cards in grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-gray-500">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                  <Layers className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12</div>
                  <p className="text-xs text-gray-500">+4 since last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                  <User className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-gray-500">+201 since last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                  <User className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-gray-500">+201 since last hour</p>
                </CardContent>
              </Card>
            </div>

            {/* Content sections with proper spacing */}
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {/* Chart section - takes up 2/3 of space */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
                    Chart placeholder
                  </div>
                </CardContent>
              </Card>

              {/* Recent sales section */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>You made 265 sales this month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center">
                        <Image
                          src="/placeholder-user.jpg"
                          alt="Avatar"
                          width={36}
                          height={36}
                          className="rounded-full"
                        />
                        <div className="ml-3 space-y-1">
                          <p className="text-sm font-medium leading-none">Customer {i}</p>
                          <p className="text-xs text-gray-500">customer{i}@example.com</p>
                        </div>
                        <div className="ml-auto font-medium">+${(i * 199).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional content section */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                  <CardDescription>Recent system activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: "Project created", user: "John Doe", time: "2 hours ago" },
                      { action: "New user added", user: "Jane Smith", time: "5 hours ago" },
                      { action: "Settings updated", user: "Admin", time: "1 day ago" },
                      { action: "Report generated", user: "System", time: "2 days ago" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div className="mr-3 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <User className="h-4 w-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.action}</p>
                          <p className="text-xs text-gray-500">By {item.user} • {item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Tasks due soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { task: "Client meeting", due: "Today, 2:00 PM", priority: "High" },
                      { task: "Project review", due: "Tomorrow, 10:00 AM", priority: "Medium" },
                      { task: "Update documentation", due: "Feb 29, 2025", priority: "Low" },
                      { task: "Budget planning", due: "Mar 5, 2025", priority: "High" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center">
                          <div className={`mr-3 h-3 w-3 rounded-full ${
                            item.priority === 'High' ? 'bg-red-500' : 
                            item.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`} />
                          <div>
                            <p className="text-sm font-medium">{item.task}</p>
                            <p className="text-xs text-gray-500">Due {item.due}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="h-7 text-xs">View</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}