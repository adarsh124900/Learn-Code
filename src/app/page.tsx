export default function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Your Learning Dashboard</h1>

      {/* Overall Progress */}
      <section className="mb-12 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-semibold mb-4 text-slate-700">Overall Progress</h2>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                In Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-indigo-600">
                35%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-indigo-100">
            <div style={{ width: "35%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
          </div>
        </div>
      </section>

      {/* Chapterwise Scorecards */}
      <section>
        <h2 className="text-xl font-semibold mb-6 text-slate-700">Chapterwise Scorecards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Python Card */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">🐍 Python</h3>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Active</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ch 1: Basics</span>
                  <span className="font-medium text-green-600">100%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ch 2: Data Types</span>
                  <span className="font-medium text-indigo-600">75%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ch 3: Loops</span>
                  <span className="font-medium text-slate-400">0%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* C++ Card */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">⚡ C++</h3>
              <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded">Not Started</span>
            </div>
             <div className="space-y-3 opacity-60">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ch 1: Intro</span>
                  <span className="font-medium">0%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ch 2: Pointers</span>
                  <span className="font-medium">0%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5"></div>
              </div>
            </div>
          </div>

          {/* Java Card */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">☕ Java</h3>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">Started</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ch 1: JVM</span>
                  <span className="font-medium text-green-600">100%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ch 2: OOP</span>
                  <span className="font-medium text-indigo-600">20%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
