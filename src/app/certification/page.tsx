"use client";

import { useState } from "react";

export default function CertificationPage() {
  const [projectSubmitted, setProjectSubmitted] = useState(false);
  const [grade, setGrade] = useState<string | null>(null);

  const handleSubmit = () => {
    setProjectSubmitted(true);
    // Simulate assessment
    setTimeout(() => {
      setGrade("A+");
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Final Project & Certification</h1>

      {!projectSubmitted ? (
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Capstone Project</h2>
          <p className="text-slate-600 mb-6 text-lg">
            To earn your certificate, you must complete the final project. Build a comprehensive command-line application that utilizes all the core concepts learned in your language track.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
            <h3 className="font-semibold text-slate-800 mb-2">Submission Guidelines:</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
              <li>Upload your project repository link (GitHub/GitLab).</li>
              <li>Include a detailed README.md explaining your architecture.</li>
              <li>Ensure all unit tests pass before submission.</li>
            </ul>
          </div>

          <div className="space-y-4 max-w-lg">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Project Repository URL</label>
              <input type="url" className="w-full border border-slate-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="https://github.com/username/project" />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition shadow-md w-full"
            >
              Submit Project for Grading
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-fade-in">

          {/* Assessment Status */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
            {!grade ? (
              <div className="py-12">
                <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
                <h2 className="text-xl font-bold text-slate-700">AI Instructor is assessing your project...</h2>
                <p className="text-slate-500 mt-2">Checking code quality, architecture, and tests.</p>
              </div>
            ) : (
              <div>
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold">
                  ✓
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Project Approved!</h2>
                <p className="text-slate-600 mb-4 text-lg">Incredible work! Your project met all the criteria.</p>
                <div className="inline-block bg-slate-100 px-6 py-3 rounded-lg text-lg">
                  <span className="text-slate-500 font-medium mr-2">Final Grade:</span>
                  <span className="font-bold text-indigo-700">{grade}</span>
                </div>
              </div>
            )}
          </div>

          {/* Certificate */}
          {grade && (
            <div className="bg-gradient-to-br from-indigo-900 via-slate-800 to-indigo-950 p-1 rounded-2xl shadow-2xl animate-fade-in-up">
              <div className="bg-white rounded-xl p-12 text-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-50 rounded-br-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-50 rounded-tl-full opacity-50"></div>

                <div className="relative z-10">
                  <div className="text-indigo-600 font-bold tracking-widest uppercase mb-8">Certificate of Completion</div>

                  <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6 font-bold">
                    QuickCode Master
                  </h2>

                  <p className="text-slate-500 mb-8 max-w-lg mx-auto text-lg">
                    This certifies that you have successfully completed the rigorous master-level programming track, demonstrating exceptional skill and dedication.
                  </p>

                  <div className="grid grid-cols-2 gap-8 max-w-md mx-auto border-t border-slate-200 pt-8 mt-8">
                    <div>
                      <div className="font-bold text-slate-800 text-lg">Python Track</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Course</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-lg">{new Date().toLocaleDateString()}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Date</div>
                    </div>
                  </div>

                  <button className="mt-12 bg-slate-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-700 transition">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
