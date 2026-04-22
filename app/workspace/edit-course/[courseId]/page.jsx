"use client"
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../../../../@/components/ui/button'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CourseInfo from "../_components/CourseInfo.jsx"
import ChapterTopicList from "../_components/ChapterTopicList.jsx"


const EditCourse = () => {
  const {courseId}=useParams();
  const [loading,setLoading]=useState(false)
  const [course,setCourse]=useState()
  const [enrollCourse, setEnrollCourse]=useState()
  const router = useRouter();
  const searchParams = useSearchParams();
  const viewCourse = searchParams.get('mode') === 'view';

  useEffect(()=>{
    GetCourseInfo();
  },[])

  const GetCourseInfo=async()=>{
    setLoading(true)
    const result=await axios.get('/api/courses?courseId='+courseId)
    setCourse(result.data)

    try {
        const enrollResult = await axios.get('/api/enroll-course?courseId='+courseId)
        if(enrollResult.data && enrollResult.data.enrollCourse) {
           setEnrollCourse(enrollResult.data.enrollCourse)
        }
    } catch(e) {}

    setLoading(false)
  }
  return (
    <div className='p-6 md:p-10'>
      <Button variant='outline' onClick={()=>router.back()} className='mb-6 rounded-full hover:bg-gray-100 transition-all font-semibold flex items-center shadow-sm'>
        <ArrowLeft className='mr-2 w-4 h-4'/> Back
      </Button>
      <CourseInfo course={course} viewCourse={viewCourse}/>
      <ChapterTopicList course={course} enrollCourse={enrollCourse} />
    </div>
  )
}

export default EditCourse
