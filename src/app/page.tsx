import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto py-6">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2 text-slate-900 tracking-tight">Welcome, Learner!</h1>
        <p className="text-lg text-slate-500">Ready to start your coding journey? Choose a course below to begin.</p>
      </header>

      {/* Overall Progress */}
      <section className="mb-14 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Overall Course Progress</h2>
        <div className="relative">
          <div className="flex mb-3 items-center justify-between">
            <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              Getting Started
            </span>
            <span className="text-sm font-bold text-slate-700">0%</span>
          </div>
          <div className="overflow-hidden h-4 text-xs flex rounded-full bg-slate-100 shadow-inner">
            <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600 transition-all duration-500"></div>
          </div>
        </div>
      </section>

      {/* Chapterwise Scorecards */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Your Languages</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Python Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🐍</span>
                <h3 className="font-bold text-xl text-slate-800">Python</h3>
              </div>
              <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Not Started</span>
            </div>

            <div className="space-y-4 mb-8 flex-1">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-600 font-medium">Ch 1: Basics</span>
                  <span className="font-semibold text-slate-400">0%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-600 font-medium">Ch 2: Data Types</span>
                  <span className="font-semibold text-slate-400">0%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-600 font-medium">Ch 3: Loops</span>
                  <span className="font-semibold text-slate-400">0%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2"></div>
              </div>
            </div>

            <Link href="/courses/python" className="w-full text-center py-3 bg-indigo-50 text-indigo-700 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-colors">
              Start Learning
            </Link>
          </div>

          {/* C++ Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⚡</span>
                <h3 className="font-bold text-xl text-slate-800">C++</h3>
              </div>
              <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Not Started</span>
            </div>
             <div className="space-y-4 mb-8 flex-1">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-600 font-medium">Ch 1: Intro</span>
                  <span className="font-semibold text-slate-400">0%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-600 font-medium">Ch 2: Pointers</span>
                  <span className="font-semibold text-slate-400">0%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2"></div>
              </div>
            </div>

            <Link href="/courses/cpp" className="w-full text-center py-3 bg-indigo-50 text-indigo-700 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-colors">
              Start Learning
            </Link>
          </div>

          {/* Java Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">☕</span>
                <h3 className="font-bold text-xl text-slate-800">Java</h3>
              </div>
              <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Not Started</span>
            </div>
            <div className="space-y-4 mb-8 flex-1">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-600 font-medium">Ch 1: JVM</span>
                  <span className="font-semibold text-slate-400">0%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-600 font-medium">Ch 2: OOP</span>
                  <span className="font-semibold text-slate-400">0%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2"></div>
              </div>
            </div>

            <Link href="/courses/java" className="w-full text-center py-3 bg-indigo-50 text-indigo-700 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-colors">
              Start Learning
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
