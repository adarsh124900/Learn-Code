export default function TestsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Assessments & Tests</h1>

      <p className="text-slate-600 mb-8 max-w-2xl text-lg">
        Evaluate your knowledge with our comprehensive test suite. Choose from chapterwise quizzes, periodic reviews, or take the final full course exam.
      </p>

      <div className="grid gap-8">

        {/* Chapterwise Tests */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">Chapterwise Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-800">Python Ch 1: Basics</h3>
                <span className="text-green-600 font-semibold text-sm">Score: 95%</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">Completed on Oct 12</p>
              <button className="text-indigo-600 text-sm font-semibold hover:underline">Review Test</button>
            </div>

            <div className="bg-white p-5 rounded-xl border border-indigo-200 shadow-sm bg-indigo-50/50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-800">Python Ch 2: Data Types</h3>
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Pending</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">Ready to take</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-indigo-700 w-full transition">Start Test</button>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm opacity-60">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-800">Python Ch 3: Loops</h3>
                <span className="text-slate-400 text-xs">Locked</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">Complete Chapter 3 first</p>
              <button className="bg-slate-200 text-slate-500 px-4 py-2 rounded text-sm font-semibold w-full cursor-not-allowed">Start Test</button>
            </div>
          </div>
        </section>

        {/* Periodic Reviews */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">Periodic Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-800 mb-1">Weekly Challenge</h3>
                <p className="text-sm text-slate-500">Test concepts learned in the last 7 days.</p>
              </div>
              <button className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded font-semibold hover:bg-indigo-200 transition">Take Now</button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-800 mb-1">Monthly Assessment</h3>
                <p className="text-sm text-slate-500">Comprehensive review of the past month.</p>
              </div>
              <button className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded font-semibold hover:bg-indigo-200 transition">Take Now</button>
            </div>
          </div>
        </section>

        {/* Full Course Exam */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">Full Course Exams</h2>
          <div className="bg-gradient-to-r from-indigo-900 to-slate-800 p-8 rounded-xl text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Mastery Final Exam</h3>
              <p className="text-indigo-200 max-w-lg">
                Unlock this final exam by completing all chapters. Passing this test is required before you can start the final project and earn your certification.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <button className="bg-white/10 text-white border border-white/30 px-8 py-3 rounded-lg font-bold w-full md:w-auto cursor-not-allowed">
                Exam Locked 🔒
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
