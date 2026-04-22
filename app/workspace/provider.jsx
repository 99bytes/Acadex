import React from 'react'
import { SidebarProvider} from "../../@/components/ui/sidebar.jsx"
import AppSidebar from "./_components/AppSidebar.jsx"
import AppHeader from "./_components/AppHeader.jsx"
function WorkspaceProvider({children}) {
  return (
    <SidebarProvider>
        <AppSidebar/>
        <div className='w-full bg-[#FDFDFD] min-h-screen font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900'>
          <AppHeader/>
          <div className='p-6 md:p-10'>
            {children}
          </div>  
        </div>
    </SidebarProvider>
    
  )
}

export default WorkspaceProvider
