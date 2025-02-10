'use client';

import { useState, useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { FaTrophy, FaClipboardCheck } from 'react-icons/fa'
import { SiHtml5 } from 'react-icons/si'
import { BsFileText } from 'react-icons/bs'
import UpdateModal from './components/UpdateModal'
import ProgressBar from './components/ProgressBar'
import CircularProgress from './components/CircularProgress'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const graphData = [
  { x: 0, y: 5 },
  { x: 25, y: 15 },
  { x: 50, y: 90 },
  { x: 75, y: 25 },
  { x: 100, y: 10 },
]

const syllabusData = [
  { topic: 'HTML Tools, Forms, History', progress: 80, color: 'bg-blue-500' },
  { topic: 'Tags & References in HTML', progress: 60, color: 'bg-orange-500' },
  { topic: 'Tables & References in HTML', progress: 24, color: 'bg-red-500' },
  { topic: 'Tables & CSS Basics', progress: 96, color: 'bg-green-500' },
]

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [stats, setStats] = useState({
    rank: 1,
    percentile: 30,
    score: 10,
    total: 15
  })
  const [previousPercentile, setPreviousPercentile] = useState(null)

  // Generate graph data based on both current and previous percentile
  const graphData = useMemo(() => {
    const userPercentile = stats.percentile;
    return [
      { x: 0, y: 0 },
      { x: 20, y: 15 },
      { x: 40, y: 30 },
      { x: 60, y: 60 },
      { x: 80, y: 25 },
      { x: 100, y: 5 },
      // Add current point
      { x: userPercentile, y: 50, current: true },
      // Add previous point if it exists
      ...(previousPercentile !== null ? [{ x: previousPercentile, y: 50, previous: true }] : [])
    ].sort((a, b) => a.x - b.x);
  }, [stats.percentile, previousPercentile]);

  // Update the onUpdate handler
  const handleUpdate = (newStats) => {
    setPreviousPercentile(stats.percentile); // Store current percentile as previous
    setStats(newStats);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-hidden">
      <Navbar />
      
      <div className="flex flex-row">
        <Sidebar />
        
        <div className="flex-1 p-8 w-full">
          <div className="max-w-[1200px] mx-auto">
            {/* Header Section */}
            <div className="bg-white rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="p-2 bg-orange-50 rounded-xl">
                    <SiHtml5 className="text-4xl text-orange-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold mb-1">Hyper Text Markup Language</h1>
                    <p className="text-sm text-gray-500">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-2.5 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800"
                >
                  Update
                </button>
              </div>
            </div>

            {/* Quick Statistics Section */}
            <div className="bg-white rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-bold mb-8">Quick Statistics</h2>
              <div className="grid grid-cols-3 gap-16">
                <div className="flex flex-col items-center">
                  <div className="mb-3">
                    <FaTrophy className="text-4xl text-yellow-500" />
                  </div>
                  <div className="text-4xl font-bold mb-1">{stats.rank}</div>
                  <div className="text-sm font-medium text-gray-500">YOUR RANK</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-3">
                    <BsFileText className="text-4xl text-gray-400" />
                  </div>
                  <div className="text-4xl font-bold mb-1">{stats.percentile}%</div>
                  <div className="text-sm font-medium text-gray-500">PERCENTILE</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-3">
                    <FaClipboardCheck className="text-4xl text-green-500" />
                  </div>
                  <div className="text-4xl font-bold mb-1">
                    {stats.score}/{stats.total}
                  </div>
                  <div className="text-sm font-medium text-gray-500">CORRECT ANSWERS</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Graph Section */}
              <div className="bg-white rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-8">Comparison Graph</h2>
                <div className="h-[300px] mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={graphData}>
                      <XAxis 
                        dataKey="x" 
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        tickLine={false}
                        axisLine={false}
                        hide
                      />
                      <Tooltip 
                        content={({ payload }) => {
                          if (payload && payload[0]) {
                            return (
                              <div className="bg-white p-2 shadow-lg rounded-lg border">
                                <p className="text-sm">
                                  numberOfStudent : {payload[0].value}
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="y" 
                        stroke="#4F46E5" 
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-600">
                  You scored {stats.percentile}% percentile which is{' '}
                  {stats.percentile < 72 ? 'lower' : 'higher'} than the
                  average percentile 72% of all the engineers who took this assessment
                </p>
              </div>

              {/* Analysis Section */}
              <div className="space-y-6">
                {/* Syllabus Analysis */}
                <div className="bg-white rounded-2xl p-6">
                  <h2 className="text-xl font-bold mb-8">Syllabus Wise Analysis</h2>
                  <div className="space-y-6">
                    {syllabusData.map((item) => (
                      <ProgressBar
                        key={item.topic}
                        topic={item.topic}
                        progress={item.progress}
                        color={item.color}
                      />
                    ))}
                  </div>
                </div>

                {/* Question Analysis */}
                <div className="bg-white rounded-2xl p-6">
                  <h2 className="text-xl font-bold mb-8">Question Analysis</h2>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-blue-600 text-3xl font-bold mb-2">
                        {stats.score}/{stats.total}
                      </div>
                      <p className="text-sm text-gray-600 max-w-xs">
                        You scored {stats.score} question correct out of {stats.total}.
                        However it still needs some improvements
                      </p>
                    </div>
                    <CircularProgress value={(stats.score / stats.total) * 100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdate}
        currentStats={stats}
      />
    </div>
  )
}