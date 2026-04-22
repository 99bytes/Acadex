import { Gift, CheckCircle } from "lucide-react";
import React from "react";

const ChapterTopicList = ({ course, enrollCourse }) => {
  const courseLayout = course?.courseJson?.course;
  const completedChapters = enrollCourse?.completedChapters || [];

  return (
    <div className="px-6 md:px-16 py-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-10">
        Chapters & Topics Tracker
      </h2>

      <div className="flex flex-col items-center gap-10">
        {courseLayout?.chapters.map((chapter, chapterIndex) => {
          const isCompleted = completedChapters.includes(chapterIndex);
          return (
          <div key={chapterIndex} className="w-full max-w-2xl space-y-4">
            {/* Chapter Card */}
            <div className={`p-6 rounded-xl shadow-lg text-white transition-all duration-500 scale-100 relative ${isCompleted ? 'bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 ring-2 ring-green-300' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}`}>
              
              {isCompleted && (
                <div className="absolute -top-3 -right-3 bg-white p-1 rounded-full shadow-lg">
                  <CheckCircle className="w-8 h-8 text-emerald-500 fill-emerald-100" />
                </div>
              )}

              <h3 className="text-lg font-medium text-center tracking-wide flex justify-center items-center gap-2">
                Chapter {chapterIndex + 1} {isCompleted && <span className="text-sm bg-white/20 px-2 py-0.5 rounded-full">(Completed)</span>}
              </h3>
              <h2 className="text-2xl md:text-3xl font-semi-bold text-center mt-1">
                {chapter.chapterName}
              </h2>
              <div className="flex justify-between text-sm text-gray-100 mt-3 px-2">
                <span>⏱ Duration: {chapter?.duration}</span>
                <span>📚 Topics: {chapter?.topics?.length}</span>
              </div>
            </div>

            {/* Topics Timeline */}
            <div className="flex flex-col items-center">
              {chapter?.topics.map((topic, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Vertical line */}
                  <div className={`h-8 w-1 transition-all ${isCompleted ? 'bg-emerald-400' : 'bg-gray-300'}`} />

                  {/* Topic node */}
                  <div className="flex items-center gap-5">
                    <span
                      className={`text-sm md:text-base ${
                        index % 2 === 0 ? (isCompleted ? "text-emerald-700 font-medium" : "") : "text-transparent"
                      }`}
                    >
                      {topic}
                    </span>

                    <div className={`rounded-full px-5 py-3 font-bold shadow-sm text-center transition-all ${isCompleted ? 'bg-emerald-100 text-emerald-600 ring-1 ring-emerald-300' : 'bg-gray-300 text-gray-600'}`}>
                      {index + 1}
                    </div>

                    <span
                      className={`text-sm md:text-base ${
                        index % 2 !== 0 ? (isCompleted ? "text-emerald-700 font-medium" : "") : "text-transparent"
                      }`}
                    >
                      {topic}
                    </span>
                  </div>

                  {/* Vertical line or Gift at end */}
                  {index !== chapter.topics.length - 1 ? (
                    <div className={`h-8 w-1 transition-all ${isCompleted ? 'bg-emerald-400' : 'bg-gray-300'}`} />
                  ) : (
                    <div className="flex items-center gap-5 mt-3">
                      <Gift className={`rounded-full h-14 w-14 p-3 shadow-md transition-all ${isCompleted ? 'bg-emerald-500 text-white' : 'bg-gray-300 text-gray-600'}`} />
                    </div>
                  )}
                </div>
              ))}

              {chapter?.topics?.length === 1 && (
                <div className={`h-8 w-1 transition-all ${isCompleted ? 'bg-emerald-400' : 'bg-gray-300'}`} />
              )}
            </div>
          </div>
        )})}

        {/* Finish Block */}
        <div className="p-5 rounded-xl shadow-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white w-full max-w-xs text-center mt-10 ring-4 ring-green-200">
          <h2 className="text-xl font-bold flex justify-center items-center gap-2">🎉 Finish Line</h2>
        </div>
      </div>
    </div>
  );
};

export default ChapterTopicList;
