import { UserButton } from '@clerk/nextjs'
import { SidebarTrigger } from '../../../@/components/ui/sidebar'
import React from 'react'

function AppHeader({hideSidebar=false}) {
  return (
    <div className='p-4 flex justify-between items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm'>
      {!hideSidebar && <SidebarTrigger/>}
      <UserButton appearance={{ elements: { userButtonAvatarBox: "w-9 h-9 border-2 border-indigo-100 shadow-sm" } }}/>
    </div>
  )
}

export default AppHeader
