import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import AIAssistant from "@/components/AIAssistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickCode | Learn to Code",
  description: "Learn Python, C++, and Java from scratch to master through bite-sized sessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-slate-50 text-slate-900">
        <aside className="w-64 bg-indigo-900 text-white flex flex-col min-h-screen p-4 shrink-0">
          <div className="text-2xl font-bold mb-8 tracking-wider text-center">
            QuickCode
          </div>
          <nav className="flex-1 space-y-2">
            <Link href="/" className="block p-2 rounded hover:bg-indigo-800 transition">
              Dashboard
            </Link>

            <div className="pt-4 pb-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              Courses
            </div>
            <Link href="/courses/python" className="block p-2 rounded hover:bg-indigo-800 transition">
              🐍 Python
            </Link>
            <Link href="/courses/cpp" className="block p-2 rounded hover:bg-indigo-800 transition">
              ⚡ C++
            </Link>
            <Link href="/courses/java" className="block p-2 rounded hover:bg-indigo-800 transition">
              ☕ Java
            </Link>

            <div className="pt-4 pb-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              Assessments
            </div>
            <Link href="/tests" className="block p-2 rounded hover:bg-indigo-800 transition">
              📝 Tests
            </Link>
            <Link href="/certification" className="block p-2 rounded hover:bg-indigo-800 transition">
              🎓 Certification
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>

        <AIAssistant />
      </body>
    </html>
  );
}
