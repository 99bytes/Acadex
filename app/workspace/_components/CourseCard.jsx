"use client"

import { Book, LoaderCircle, PlayCircle, Settings, Trash2, Map } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../../../@/components/ui/button';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'sonner';

const CourseCard = ({ course, refreshData }) => {
    const courseJson = course?.courseJson?.course;
    const [loading, setLoading] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const onEnrollCourse = async () => {
        try {
            setLoading(true);
            const result = await axios.post('/api/enroll-course', {
                courseId: course?.cid
            });
            if (result.data.resp) {
                toast.warning("Already Enrolled");
            } else {
                toast.success("Enrolled");
            }
        } catch (e) {
            console.log(e); 
            toast.error("Server Side Error");
        } finally {
            setLoading(false);
        }
    }

    const deleteCourse = async () => {
        if (!window.confirm(`Are you sure you want to permanently delete "${courseJson?.name || 'this course'}"?`)) return;
        try {
            setDeleting(true);
            await axios.delete('/api/courses?courseId=' + course?.cid);
            toast.success("Course deleted perfectly.");
            if (refreshData) {
                refreshData(); 
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete the course.");
            setDeleting(false);
        }
    }

  return (
    <div className='relative shadow-md rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl bg-white/80 overflow-hidden cursor-default group flex flex-col'>
      
      {/* Delete Overlay Button */}
      <button 
         onClick={deleteCourse}
         title="Delete Course"
         disabled={deleting}
         className='absolute top-3 right-3 z-10 opacity-100 bg-red-100/80 hover:bg-red-500 text-red-600 hover:text-white backdrop-blur-md p-2 rounded-full transition-all duration-300 shadow-xl group/btn'
      >
          {deleting ? <LoaderCircle className='w-4 h-4 animate-spin text-white'/> : <Trash2 className='w-4 h-4' />} 
      </button>

      <Image 
          src={course?.BannerImageUrl || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format"} 
          alt={courseJson?.name || "Course Banner"} 
          width={400} 
          height={400}
          className='w-full aspect-video rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-110'
      />

      <div className='p-4 flex flex-col gap-4 bg-white relative z-10 flex-1 justify-between'>
        <div className='flex flex-col gap-2'>
            <h2 className='font-extrabold text-[18px] text-gray-900 leading-tight'>
                {courseJson?.name || "Untitled Course"}
            </h2>
            <p className='line-clamp-2 text-gray-500 text-xs font-medium'>
                {courseJson?.description || "No description provided."}
            </p>
        </div>

        <div className='flex justify-between items-center mt-2 pt-4 border-t border-gray-100'>
            <h2 className='flex items-center text-xs font-semibold text-gray-600 gap-1.5'>
               <Book className='text-purple-600 w-4 h-4'/>
               {courseJson?.noOfChapters || 0} Chapters
            </h2>
            
            {course?.courseContent?.length ? (
                <div className='flex gap-2 w-full'>
                  <Button 
                     size={'sm'}
                     onClick={onEnrollCourse}
                     disabled={loading}
                     className='flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all rounded-full px-4'
                  >
                     {loading ? <LoaderCircle className='animate-spin w-4 h-4'/> : <PlayCircle className='w-4 h-4 mr-1'/>} Enroll
                  </Button>
                  <Link href={'/workspace/edit-course/'+course?.cid+'?mode=view'} className='flex-1'>
                    <Button 
                       size={'sm'} 
                       variant='outline'
                       className='w-full border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 rounded-full px-2 shadow-sm transition-all'
                    >
                      <Map className='w-4 h-4 mr-1'/> Roadmap
                    </Button>
                  </Link>
                </div>
            ) : (
                <Link href={'/workspace/edit-course/'+course?.cid}>
                   <Button 
                      size={'sm'} 
                      variant='outline'
                      className='border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 rounded-full px-4 shadow-sm transition-all'
                   >
                     <Settings className='w-4 h-4'/> Finish Setup
                   </Button>
                </Link>
            )}
        </div>
      </div>
    </div>
  )
}

export default CourseCard
