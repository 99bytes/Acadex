"use client"

import { Progress } from "../../../@/components/ui/progress.jsx";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../../../@/components/ui/button.jsx";
import { PlayCircle, Trash2, LoaderCircle, Map } from "lucide-react";
import Link from "next/link.js";
import axios from "axios";
import { toast } from "sonner";

const EnrollCourseCard = ({ course, enrollCourse, refreshData }) => {
  const courseJson = course?.courseJson?.course;
  const [unenrolling, setUnenrolling] = useState(false);

  const CalculateProgress = () => {
    const completed = enrollCourse?.completedChapters?.length ?? 0;
    const total = course?.courseContent?.length ?? 1; // avoid division by 0
    return Math.round((completed / total) * 100);
  };

  const unenrollCourse = async () => {
    if (!window.confirm(`Are you sure you want to drop out of "${courseJson?.name || 'this course'}" and lose all your progress?`)) return;
    try {
        setUnenrolling(true);
        await axios.delete('/api/enroll-course?courseId=' + course?.cid);
        toast.success("Succesfully unenrolled.");
        if (refreshData) {
            refreshData(); 
        }
    } catch (error) {
        console.error(error);
        toast.error("Failed to unenroll.");
        setUnenrolling(false);
    }
  }

  return (
    <div className='relative shadow-md rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl bg-white/80 overflow-hidden cursor-default group flex flex-col'>
      
      {/* Delete/Unenroll Overlay Button */}
      <button 
         onClick={unenrollCourse}
         title="Unenroll Course"
         disabled={unenrolling}
         className='absolute top-3 right-3 z-10 opacity-100 bg-red-100/80 hover:bg-red-500 text-red-600 hover:text-white backdrop-blur-md p-2 rounded-full transition-all duration-300 shadow-xl group/btn'
      >
          {unenrolling ? <LoaderCircle className='w-4 h-4 animate-spin text-white'/> : <Trash2 className='w-4 h-4' />} 
      </button>

      <Image
        src={course?.BannerImageUrl || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format"}
        alt={courseJson?.name || "Course Image"}
        width={400}
        height={400}
        className="w-full aspect-video rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="p-4 flex flex-col gap-4 bg-white relative z-10 flex-1 justify-between border-t border-white/50">
        <div className="flex flex-col gap-2">
           <h2 className="font-extrabold text-[18px] text-gray-900 leading-tight">{courseJson?.name || "Untitled"}</h2>
           <p className="line-clamp-2 text-gray-500 text-xs font-medium">
             {courseJson?.description}
           </p>
        </div>

        <div className="flex flex-col gap-3 mt-2 pt-3 border-t border-gray-100">
          <div className="flex justify-between items-center text-xs font-bold text-gray-600">
            <span>Progress Tracker</span>
            <span className="text-purple-600">{CalculateProgress()}%</span>
          </div>
          <Progress value={CalculateProgress()} className="h-2" />

          <div className="flex gap-2 w-full mt-2">
            <Link href={"/course/" + course?.cid} className="flex-1">
              <Button className={"w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-md hover:shadow-lg transition-all rounded-full"}>
                <PlayCircle className="w-4 h-4 mr-1" />
                Resume
              </Button>
            </Link>
            <Link href={"/workspace/edit-course/" + course?.cid + "?mode=view"} className="flex-1">
              <Button variant="outline" className={"w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-full"}>
                <Map className="w-4 h-4 mr-1" />
                Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollCourseCard;
