"use client";

import { Button } from "../@/components/ui/button.jsx";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, BrainCircuit, LayoutDashboard, Sparkles, Target, Zap, ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#FDFDFD] text-gray-900 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* 🚀 NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BrainCircuit className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-gray-900">Acadex<span className="text-indigo-600">.</span></h1>
          </div>
          
          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="/workspace">
                 <span className="cursor-pointer text-sm font-semibold text-gray-600 hover:text-indigo-600 hidden md:block mr-4 transition-colors">Dashboard</span>
              </Link>
              <UserButton afterSignOutUrl="/" appearance={{ elements: { userButtonAvatarBox: "w-9 h-9 border-2 border-indigo-100" } }}/>
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in" className="hidden md:block">
                <Button variant="ghost" className="font-semibold text-gray-600 hover:text-indigo-600">Log in</Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full px-6 shadow-md shadow-indigo-200 transition-all hover:scale-105">Get Started</Button>
              </Link>
            </SignedOut>
          </div>
        </div>
      </header>

      {/* 🌟 HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>The #1 Llama-3 Powered Course Architect</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Generate Expert Courses <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">In Seconds, Not Months.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 font-medium leading-relaxed">
            Stop wasting hours planning curriculum. Acadex uses advanced AI to instantly architect precise, video-integrated courses so you can focus strictly on learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link href="/workspace">
              <Button size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full px-8 py-6 shadow-xl shadow-indigo-200 transition-all hover:scale-105 group">
                Build Your First Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/workspace/explore">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg font-semibold rounded-full px-8 py-6 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 transition-all">
                Explore Library
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-14 flex items-center justify-center gap-6 text-sm text-gray-400 font-medium">
             <span className="flex items-center gap-1.5"><ShieldCheck className="w-5 h-5 text-emerald-500"/> No Credit Card Required</span>
             <span className="hidden md:flex items-center gap-1.5"><ShieldCheck className="w-5 h-5 text-emerald-500"/> Unlimited Generation</span>
          </div>
        </div>

        {/* Hero Dashboard UI Mockup */}
        <div className="max-w-5xl mx-auto px-6 mt-20 relative z-10 w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-transparent to-transparent z-20 h-full w-full bottom-0 pointer-events-none"></div>
          
          <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden relative bg-white aspect-[16/9] md:aspect-[21/9] flex transition-all duration-700 hover:shadow-indigo-500/20 group">
            
            {/* Top Browser Bar Mock */}
            <div className="absolute top-0 inset-x-0 h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2 z-10">
               <div className="w-3 h-3 rounded-full bg-red-400"></div>
               <div className="w-3 h-3 rounded-full bg-amber-400"></div>
               <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>

            {/* Sidebar Mock */}
            <div className="w-1/4 bg-gray-50/50 border-r border-gray-100 p-6 hidden md:flex flex-col gap-6 pt-16">
                <div className="w-full h-8 bg-indigo-600/10 rounded-md flex items-center px-3">
                   <div className="w-4 h-4 rounded bg-indigo-600/50"></div>
                   <div className="w-1/2 h-2 ml-3 bg-indigo-600/30 rounded-sm"></div>
                </div>
                <div className="w-3/4 h-3 bg-gray-200 rounded-full"></div>
                <div className="w-1/2 h-3 bg-gray-200 rounded-full"></div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-4"></div>
                <div className="w-5/6 h-3 bg-gray-200 rounded-full"></div>
            </div>

            {/* Main Content Mock */}
            <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 pt-16 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500 opacity-5 blur-[80px] rounded-full"></div>
                
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-col gap-2 w-1/3">
                       <div className="w-2/3 h-6 bg-gray-900/80 rounded-md"></div>
                       <div className="w-full h-3 bg-gray-200 rounded-md"></div>
                    </div>
                    <div className="w-10 h-10 bg-indigo-100 rounded-full border-2 border-white shadow-sm"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Active Card */}
                    <div className="h-28 bg-white border shadow-sm border-indigo-100 rounded-xl relative overflow-hidden flex flex-col justify-between p-4 group-hover:-translate-y-1 transition-transform">
                       <div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center">
                          <div className="w-4 h-4 bg-indigo-500 rounded-sm"></div>
                       </div>
                       <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="w-[60%] h-full bg-emerald-500"></div>
                       </div>
                    </div>
                    {/* Inactive Card */}
                    <div className="h-28 bg-white border border-gray-100 rounded-xl p-4 flex flex-col justify-between hidden sm:flex">
                       <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center">
                          <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
                       </div>
                       <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                    </div>
                    <div className="h-28 bg-white border border-gray-100 rounded-xl p-4 flex flex-col justify-between">
                       <div className="w-full h-2/3 bg-gray-50 rounded-lg"></div>
                       <div className="w-3/4 h-2 bg-gray-100 rounded-full"></div>
                    </div>
                </div>

                {/* Timeline / Roadmap Mock */}
                <div className="flex-1 bg-white border border-gray-100 rounded-xl mt-2 p-6 flex flex-col gap-5 shadow-sm relative">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-emerald-50"></div>
                        <div className="flex-1">
                           <div className="h-4 w-1/3 bg-gray-900/70 rounded-md mb-2"></div>
                           <div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                    <div className="absolute left-[39px] top-[50px] bottom-[50px] w-[2px] bg-gray-100"></div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-indigo-100 flex items-center justify-center border-4 border-white shadow-sm z-10">
                           <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        </div>
                        <div className="flex-1">
                           <div className="h-4 w-2/3 bg-gray-900/70 rounded-md mb-2"></div>
                           <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FEATURES GRID */}
      <section className="py-24 bg-white relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Enterprise Grade Learning</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Everything You Need To Master Any Topic</h3>
            <p className="text-gray-500 text-lg">We stripped away the friction. Generate, study, and track your progress in a unified smart-dashboard.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#F8F9FB] border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit className="text-indigo-600 w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Instant AI Architect</h4>
              <p className="text-gray-500 leading-relaxed">Input any topic in the world, and our Llama-3 AI builds a comprehensive structured curriculum in seconds.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#F8F9FB] border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-purple-600 w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Dynamic Tracking</h4>
              <p className="text-gray-500 leading-relaxed">Stay motivated with live progress tracking, milestone charts, and beautifully visual dynamic roadmaps.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#F8F9FB] border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-emerald-600 w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Video Integrations</h4>
              <p className="text-gray-500 leading-relaxed">Each generated chapter automatically syncs with the most relevant, high-quality YouTube lectures available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 HOW IT WORKS */}
      <section className="py-24 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">From Idea to Execution</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { step: "01", title: "Pick a Topic", desc: "Type literally any subject you want to master." },
              { step: "02", title: "AI Generation", desc: "Watch the AI instantly structure your chapters." },
              { step: "03", title: "Video Sourcing", desc: "The platform curates the best video lectures." },
              { step: "04", title: "Complete & Track", desc: "Mark chapters done and watch your roadmap turn green." },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center relative">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-indigo-100 shadow-sm flex items-center justify-center text-xl font-black text-indigo-600 mb-5 z-10 relative">
                  {s.step}
                </div>
                {/* Connector line for desktop */}
                {i !== 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-indigo-100"></div>}
                <h4 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm max-w-[200px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to accelerate your learning?</h2>
          <p className="text-xl text-gray-400 mb-10">Join thousands of students and self-learners architecting their own success path.</p>
          <Link href="/workspace">
            <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white border-0 text-lg font-bold rounded-full px-10 py-7 shadow-2xl transition-transform hover:scale-105">
              Start Building Now
            </Button>
          </Link>
        </div>
      </section>

      {/* 🚀 ROBUST FOOTER */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="text-indigo-600 w-6 h-6" />
                <span className="text-xl font-black text-gray-900">Acadex.</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">The premier AI-powered learning environment designed for rapid skill acquisition.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/workspace/explore" className="hover:text-indigo-600 transition-colors">Explore</Link></li>
                <li><Link href="/workspace" className="hover:text-indigo-600 transition-colors">Dashboard</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Acadex Inc. All rights reserved.</p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-indigo-100 transition-colors cursor-pointer"></div>
               <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-indigo-100 transition-colors cursor-pointer"></div>
               <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-indigo-100 transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
