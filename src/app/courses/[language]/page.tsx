import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { language: 'python' },
    { language: 'cpp' },
    { language: 'java' }
  ]
}

export default async function CoursePage({ params }: { params: Promise<{ language: string }> }) {
  const { language } = await params;

  const courses: Record<string, { title: string, chapters: string[] }> = {
    python: {
      title: "Python",
      chapters: ["Basics & Syntax", "Data Types & Variables", "Control Flow (Loops)", "Functions & Modules"]
    },
    cpp: {
      title: "C++",
      chapters: ["Introduction & Setup", "Pointers & References", "Object Oriented Programming", "STL & Templates"]
    },
    java: {
      title: "Java",
      chapters: ["JVM Architecture", "Classes & Objects", "Inheritance & Polymorphism", "Exception Handling"]
    }
  };

  const course = courses[language];

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-6">
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-extrabold text-slate-900 capitalize tracking-tight">{course.title} Course</h1>
          <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-200">
            Master Level Path
          </span>
        </div>
        <p className="text-lg text-slate-500">
          Complete the following 1-minute learning sessions and practice tasks to master {course.title}.
        </p>
      </header>

      <div className="grid gap-5">
        {course.chapters.map((chapterTitle, index) => (
          <Link href={`/courses/${language}/chapter-${index + 1}`} key={index}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group">
              <div>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2 block">Chapter {index + 1}</span>
                <h2 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{chapterTitle}</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Status</div>
                  <div className="text-sm font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    Not Started
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors ring-1 ring-slate-200 group-hover:ring-indigo-600 shadow-sm">
                  <span className="text-xl leading-none">➔</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
