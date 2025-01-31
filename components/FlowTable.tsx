'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Play } from 'lucide-react'

const initialFlows = [
  { 
    id: 1, 
    name: 'Website Performance', 
    url: '', 
    lastRunStatus: 'Not Run', 
    lastRunTime: '-', 
    error: null,
    endpoint: 'http://127.0.0.1:8000/lighthouse_test/'
  },
  { 
    id: 2, 
    name: 'Website Responsive Performance', 
    url: '', 
    lastRunStatus: 'Not Run', 
    lastRunTime: '-', 
    error: null,
    endpoint: '/api/performance/responsive'
  },
  { 
    id: 3, 
    name: 'Load and Stress Performance', 
    url: '', 
    lastRunStatus: 'Not Run', 
    lastRunTime: '-', 
    error: null,
    endpoint: '/api/performance/load-stress'
  },
  { 
    id: 4, 
    name: 'Overall Website Performance', 
    url: '', 
    lastRunStatus: 'Not Run', 
    lastRunTime: '-', 
    error: null,
    endpoint: '/api/performance/overall'
  },
]

export default function FlowTable() {
  const [flows, setFlows] = useState(initialFlows)

  const updateUrl = (id, newUrl) => {
    setFlows(flows.map(flow => 
      flow.id === id ? { ...flow, url: newUrl, error: null } : flow
    ))
  }

  const runFlow = async (flow) => {
    if (!flow.url) {
      setFlows(flows.map(f => 
        f.id === flow.id ? { ...f, error: 'Please enter a URL first' } : f
      ))
      return
    }

    // Update status to Running immediately
    setFlows(flows.map(f => 
      f.id === flow.id ? { 
        ...f, 
        lastRunStatus: 'Running', 
        lastRunTime: 'Now',
        error: null
      } : f
    ))

    try {
      const response = await fetch(flow.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          flowId: flow.id,
          url: flow.url,
          name: flow.name
        }),
        credentials: "include",  // Allows cookies/sessions if required 
      })

      if (!response.ok) {
        throw new Error('Failed to run flow')
      }

      const data = await response.json()
      
      // Update flow with success status
      setFlows(flows.map(f => 
        f.id === flow.id ? { 
          ...f, 
          lastRunStatus: 'Success',
          lastRunTime: new Date().toLocaleString(),
          error: null
        } : f
      ))

    } catch (error) {
      // Update flow with error status
      setFlows(flows.map(f => 
        f.id === flow.id ? { 
          ...f, 
          lastRunStatus: 'Error',
          lastRunTime: new Date().toLocaleString(),
          error: error.message || 'Failed to run flow'
        } : f
      ))
    }
  }

  const runAllFlows = () => {
    flows.forEach(flow => runFlow(flow))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">TrryFix</h2>
          <div className="space-x-2">
            <Button 
              variant="outline" 
              className="text-black border-white"
              onClick={runAllFlows}
            >
              Run All
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Flow Name</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Last Run Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {flows.map((flow) => (
              <TableRow key={flow.id}>
                <TableCell>{flow.name}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <Input
                      type="url"
                      value={flow.url}
                      onChange={(e) => updateUrl(flow.id, e.target.value)}
                      placeholder="Enter URL..."
                      className={`bg-gray-800 text-white ${flow.error ? 'border-red-500' : ''}`}
                    />
                    {flow.error && (
                      <p className="text-red-500 text-sm">{flow.error}</p>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded ${
                    flow.lastRunStatus === 'Success' ? 'bg-green-800 text-green-200' :
                    flow.lastRunStatus === 'Running' ? 'bg-yellow-800 text-yellow-200' :
                    flow.lastRunStatus === 'Error' ? 'bg-red-800 text-red-200' :
                    'bg-gray-800 text-gray-200'
                  }`}>
                    {flow.lastRunStatus}
                  </span>
                  <span className="ml-2 text-gray-400">{flow.lastRunTime}</span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      size="icon" 
                      variant="ghost"
                      onClick={() => runFlow(flow)}
                      disabled={flow.lastRunStatus === 'Running'}
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}