"use client"

import React, { useEffect, useState } from 'react'
import AppHeader from '../../workspace/_components/AppHeader'
import ChapterListSidebar from "../_components/ChapterListSidebar.jsx"
import ChapterContent from "../_components/ChapterContent.jsx"
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../../../@/components/ui/button'
import axios from 'axios'
const Course = () => {
    const {courseId}=useParams();
    const router = useRouter();
    const [courseInfo,setCourseInfo]=useState()
    
    useEffect(()=>{
        getEnrolledCourseById()
    },[])
    
    const getEnrolledCourseById=async ()=>{
    
        const result=await axios.get('/api/enroll-course?courseId='+courseId);
        console.log("course",result.data)
        setCourseInfo(result.data)
    }
  return (
    <div>
      <AppHeader hideSidebar={true}/>
      <div className='px-10 py-5 bg-white border-b sticky top-0 z-20 shadow-sm'>
         <Button variant='outline' onClick={()=>router.back()} className='rounded-full hover:bg-gray-100 transition-all font-semibold flex items-center'>
           <ArrowLeft className='mr-2 w-4 h-4'/> Return to Dashboard
         </Button>
      </div>
      <div className='flex gap-10'>
        <ChapterListSidebar courseInfo={courseInfo}/>
        <ChapterContent courseInfo={courseInfo} refreshData={()=>getEnrolledCourseById()}/>
      </div>
    </div>
  )
}

export default Course
