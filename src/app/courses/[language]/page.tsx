import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CoursePage({ params }: { params: { language: string } }) {
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
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-800 capitalize">{course.title} Course</h1>
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
          Master Level Path
        </span>
      </div>

      <div className="grid gap-4">
        {course.chapters.map((chapterTitle, index) => (
          <Link href={`/courses/${language}/chapter-${index + 1}`} key={index}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-indigo-500 hover:shadow-md transition flex items-center justify-between group">
              <div>
                <span className="text-sm text-slate-500 font-semibold mb-1 block">Chapter {index + 1}</span>
                <h2 className="text-xl font-bold text-slate-700 group-hover:text-indigo-600 transition">{chapterTitle}</h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-slate-500 mb-1">Status</div>
                  <div className="text-sm font-semibold text-slate-700">
                    {index === 0 ? "Completed" : index === 1 ? "In Progress" : "Locked"}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition">
                  ➔
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
