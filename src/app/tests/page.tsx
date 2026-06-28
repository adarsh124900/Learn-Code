import Link from "next/link";

export default function TestsPage() {
  return (
    <div className="max-w-5xl mx-auto py-6">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2 text-slate-900 tracking-tight">Assessments & Tests</h1>
        <p className="text-lg text-slate-500 max-w-2xl">
          Evaluate your knowledge with our comprehensive test suite. Complete chapters to unlock quizzes, periodic reviews, and the final course exams.
        </p>
      </header>

      <div className="grid gap-10">

        {/* Chapterwise Tests */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Chapterwise Tests</h2>
            <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">0 Completed</span>
          </div>

          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-lg font-bold text-slate-700 mb-2">No tests unlocked yet</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-6">
              Start learning a language and complete your first chapter to unlock chapter-specific quizzes and assess your progress.
            </p>
            <Link href="/" className="inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-sm">
              Go to Courses
            </Link>
          </div>
        </section>

        {/* Periodic Reviews */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Periodic Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 ring-1 ring-slate-900/5 shadow-sm opacity-75">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-slate-800">Weekly Challenge</h3>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Locked</span>
              </div>
              <p className="text-slate-500 mb-6">Test concepts learned in the last 7 days. Unlocks after 1 week of active learning.</p>
              <button className="bg-slate-100 text-slate-400 px-5 py-2.5 rounded-xl font-semibold w-full cursor-not-allowed">Take Challenge</button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 ring-1 ring-slate-900/5 shadow-sm opacity-75">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-slate-800">Monthly Assessment</h3>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Locked</span>
              </div>
              <p className="text-slate-500 mb-6">Comprehensive review of the past month. Unlocks after 30 days of active learning.</p>
              <button className="bg-slate-100 text-slate-400 px-5 py-2.5 rounded-xl font-semibold w-full cursor-not-allowed">Take Assessment</button>
            </div>
          </div>
        </section>

        {/* Full Course Exam */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Full Course Exams</h2>
          <div className="bg-slate-900 p-8 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>

            <div className="mb-6 md:mb-0 md:mr-8 relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎓</span>
                <h3 className="text-2xl font-bold">Mastery Final Exam</h3>
              </div>
              <p className="text-slate-300 max-w-xl text-lg">
                Unlock this final exam by completing all chapters. Passing this test is required before you can start the final project and earn your certification.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto relative z-10">
              <button className="bg-white/10 text-white/50 border border-white/20 px-8 py-3.5 rounded-xl font-bold w-full md:w-auto cursor-not-allowed flex items-center justify-center gap-2">
                <span>Exam Locked</span>
                <span className="text-lg">🔒</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
