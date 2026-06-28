"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ChapterClient({ language, chapter }: { language: string, chapter: string }) {
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute
  const [isLearningFinished, setIsLearningFinished] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isLearningFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isLearningFinished]);

  if (timeLeft === 0 && !isLearningFinished) {
    setIsLearningFinished(true);
  }

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="mb-8">
        <Link href={`/courses/${language}`} className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-sm font-bold transition-colors">
          <span className="mr-2">←</span> Back to {language} Course
        </Link>
      </div>

      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 capitalize tracking-tight">{chapter.replace('-', ' ')}</h1>
        {!isLearningFinished && (
          <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl font-bold ring-1 ring-indigo-200 shadow-sm">
            <span className="text-xl">⏱</span> 00:{timeLeft.toString().padStart(2, '0')}
          </div>
        )}
      </div>

      {!isLearningFinished ? (
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5 transition-all">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Quick Learning Session</h2>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed max-w-3xl">
            Read through this core concept. You have 1 minute to grasp the basics before the practice task begins.
            Focus on understanding the syntax and logic. Remember, our AI assistant is available if you need a quick hint!
          </p>
          <div className="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm mb-8 shadow-inner overflow-x-auto">
            <span className="text-slate-500">{`// Core syntax for ${language}`}</span>
            <br />
            <br />
            <span className="text-indigo-300">print</span>(&quot;Mastering the basics&quot;);
          </div>
          <button
            onClick={() => setIsLearningFinished(true)}
            className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-sm w-full md:w-auto"
          >
            I&apos;m Ready Now
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-slate-800">Practice Task</h2>
            {taskCompleted && (
              <span className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold border border-green-200 flex items-center gap-2">
                <span>✓</span> Task Completed
              </span>
            )}
          </div>

          <p className="text-slate-600 mb-6 text-lg">
            Write a small script to output &quot;Hello World&quot; and declare a variable in {language}.
          </p>

          <textarea
            className="w-full h-64 p-6 font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-6 shadow-inner resize-none text-slate-800"
            placeholder="Write your code here..."
            defaultValue=""
          ></textarea>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <button
              onClick={() => setTaskCompleted(true)}
              disabled={taskCompleted}
              className={`px-8 py-3.5 rounded-xl font-bold w-full md:w-auto transition-all ${
                taskCompleted
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
              }`}
            >
              {taskCompleted ? "Submitted" : "Run & Submit"}
            </button>

            {taskCompleted && (
              <Link href={`/courses/${language}`} className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-2 w-full md:w-auto justify-center bg-indigo-50 px-6 py-3.5 rounded-xl">
                <span>Next Chapter</span>
                <span>→</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}