"use client";

import { useState } from "react";

export default function CertificationPage() {
  const [selectedLang, setSelectedLang] = useState("python");
  const [projectUrl, setProjectUrl] = useState("");
  const [isGrading, setIsGrading] = useState(false);
  const [result, setResult] = useState<"none" | "passed" | "failed">("none");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectUrl.trim()) return;

    setIsGrading(true);
    setResult("none");

    // Simulate AI grading delay
    setTimeout(() => {
      setIsGrading(false);
      // Mock result: pass if URL includes 'github.com', otherwise fail
      if (projectUrl.includes("github.com")) {
        setResult("passed");
      } else {
        setResult("failed");
      }
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2 text-slate-900 tracking-tight">Capstone & Certification</h1>
        <p className="text-lg text-slate-500">
          Complete the final course project and submit it for AI assessment to earn your completion certificate.
        </p>
      </header>

      <div className="grid md:grid-cols-5 gap-8">

        {/* Left Col: Instructions & Form */}
        <div className="md:col-span-3 space-y-8">
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">Final Project Submission</h2>
            <p className="text-slate-600 mb-6">
              To earn your certificate, you must build a comprehensive project that demonstrates your mastery of the language. Our AI will automatically grade your repository based on code quality, functionality, and documentation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Select Language Path</label>
                <div className="flex gap-3">
                  {["python", "cpp", "java"].map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setSelectedLang(lang)}
                      className={`px-4 py-2 rounded-xl border font-semibold text-sm transition-colors ${
                        selectedLang === lang
                        ? "bg-indigo-50 border-indigo-200 text-indigo-700 ring-1 ring-indigo-500"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {lang === "python" ? "🐍 Python" : lang === "cpp" ? "⚡ C++" : "☕ Java"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Project Repository URL</label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/username/project"
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow bg-slate-50"
                />
                <p className="text-xs text-slate-500 mt-2">Make sure your repository is public so our AI can access it.</p>
              </div>

              <button
                type="submit"
                disabled={isGrading || !projectUrl}
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isGrading ? (
                  <>
                    <span className="animate-spin inline-block w-5 h-5 border-[3px] border-white border-t-transparent rounded-full"></span>
                    AI is grading...
                  </>
                ) : "Submit for Grading"}
              </button>
            </form>
          </section>

          {/* Grading Result Feedback */}
          {result === "failed" && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-2xl">
              <h3 className="font-bold flex items-center gap-2 text-lg mb-2">
                <span>❌</span> Assessment Failed
              </h3>
              <p className="mb-4">Our AI agent reviewed your project and found it lacking in some areas.</p>
              <ul className="list-disc ml-5 text-sm space-y-1 mb-4 opacity-90">
                <li>Make sure your code is hosted on GitHub (URL must contain &apos;github.com&apos; for this demo).</li>
                <li>Ensure a README.md is present with setup instructions.</li>
                <li>Check for proper error handling.</li>
              </ul>
              <button onClick={() => setResult("none")} className="text-sm font-bold underline hover:text-red-900">Try again</button>
            </div>
          )}
        </div>

        {/* Right Col: Certificate Preview */}
        <div className="md:col-span-2">
          <div className="sticky top-8">
            <h2 className="text-xl font-bold mb-4 text-slate-800">Your Certificate</h2>

            {result === "passed" ? (
              <div className="bg-white p-6 rounded-2xl border-4 border-indigo-100 shadow-xl text-center relative overflow-hidden ring-1 ring-slate-900/5">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
                <div className="text-5xl mb-4 mt-2">🏆</div>
                <h3 className="text-2xl font-black text-slate-800 mb-1 uppercase tracking-widest text-indigo-900">Certificate</h3>
                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-6">Of Completion</p>
                <p className="text-sm text-slate-600 mb-2">This certifies that</p>
                <p className="text-xl font-bold border-b-2 border-slate-200 pb-2 mb-4 mx-4">Learner Name</p>
                <p className="text-sm text-slate-600 mb-2">has successfully mastered</p>
                <p className="font-bold text-lg text-indigo-700 capitalize mb-8 bg-indigo-50 inline-block px-4 py-1 rounded-full">{selectedLang} Programming</p>
                <div className="flex justify-between items-end px-4">
                  <div className="text-left">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-xl mb-1 border border-slate-200 shadow-inner">
                      🏅
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 font-bold mb-1">Issue Date</p>
                    <p className="text-sm font-bold text-slate-700">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-100 border border-dashed border-slate-300 p-8 rounded-2xl text-center aspect-[4/5] flex flex-col items-center justify-center">
                <span className="text-4xl grayscale opacity-50 mb-4">🏆</span>
                <p className="text-slate-500 font-medium">Submit your final project to unlock your certificate.</p>
              </div>
            )}

            {result === "passed" && (
              <button className="w-full mt-4 bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition flex items-center justify-center gap-2">
                <span>Download PDF</span>
                <span>⬇️</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
