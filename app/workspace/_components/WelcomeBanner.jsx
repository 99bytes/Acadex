import React from 'react'
import { Sparkles } from 'lucide-react'

function WelcomeBanner() {
  return (
    <div className='p-8 bg-[#111827] rounded-2xl relative overflow-hidden mb-8 shadow-sm'>
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[80px] opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[80px] opacity-20 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-semibold mb-4 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-indigo-300" />
          Dashboard Overview
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
          Welcome to Acadex<span className="text-indigo-400">.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl font-medium">
          Your personalized AI architecture is ready. Discover, learn, and dynamically track your progress.
        </p>
      </div>
    </div>
  )
}

export default WelcomeBanner
