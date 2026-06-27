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
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href={`/courses/${language}`} className="text-indigo-600 hover:underline text-sm font-semibold">
          ← Back to {language} Course
        </Link>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-800 capitalize">{chapter.replace('-', ' ')}</h1>
        {!isLearningFinished && (
          <div className="flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-bold">
            <span>⏱</span> 00:{timeLeft.toString().padStart(2, '0')}
          </div>
        )}
      </div>

      {!isLearningFinished ? (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold text-indigo-600 mb-4">Quick Learning Session</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Read through this core concept. You have 1 minute to grasp the basics before the practice task begins.
            Focus on understanding the syntax and logic. Remember, our AI assistant is available if you need a quick hint!
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm mb-6">
            {`// Example snippet for ${language}`}
            <br />
            console.log(&quot;Learning fast!&quot;);
          </div>
          <button
            onClick={() => setIsLearningFinished(true)}
            className="bg-indigo-600 text-white px-6 py-2 rounded font-semibold hover:bg-indigo-700 transition"
          >
            I&apos;m Ready Now
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 animate-fade-in">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-green-600">Practice Task</h2>
            {taskCompleted && <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">✓ Completed</span>}
          </div>

          <p className="text-slate-700 mb-6 font-medium">
            Write a small script to output &quot;Hello World&quot; and declare a variable in {language}.
          </p>

          <textarea
            className="w-full h-40 p-4 font-mono text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 mb-4"
            placeholder="Write your code here..."
            defaultValue=""
          ></textarea>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setTaskCompleted(true)}
              className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition"
            >
              Run & Submit
            </button>

            {taskCompleted && (
              <Link href={`/courses/${language}`} className="text-indigo-600 font-semibold hover:underline">
                Next Chapter →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}