import ChapterClient from "./components/ChapterClient";

export function generateStaticParams() {
  const languages = ['python', 'cpp', 'java'];
  const chapters = ['chapter-1', 'chapter-2', 'chapter-3', 'chapter-4'];

  const params = [];
  for (const language of languages) {
    for (const chapter of chapters) {
      params.push({ language, chapter });
    }
  }
  return params;
}

export default async function ChapterPage({ params }: { params: Promise<{ language: string, chapter: string }> }) {
  const { language, chapter } = await params;

  return <ChapterClient language={language} chapter={chapter} />;
}