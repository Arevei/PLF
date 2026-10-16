import type { Metadata } from "next";
import NewsDetail from "@/app/news-detail/page";
import { getDb } from "@/lib/db";
import { toPlainText } from "@/lib/site-url";

type Props = { params: Promise<{ id: string }> };
type NewsMetaDoc = { id: number; title: string; content: string; excerpt?: string | null; imageUrl?: string | null };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = Number((await params).id);
  try {
    const article = await (await getDb()).collection<NewsMetaDoc>("news").findOne({ id });
    if (!article) return { title: "News article not found", robots: { index: false, follow: false } };
    const description = toPlainText(article.excerpt || article.content);
    const canonical = `/news/${article.id}`;
    const image = article.imageUrl || "/og/plf-open-graph.jpg";
    return {
      title: article.title,
      description,
      alternates: { canonical },
      openGraph: { type: "article", url: canonical, title: article.title, description, images: [{ url: image }] },
      twitter: { card: "summary_large_image", title: article.title, description, images: [image] },
    };
  } catch {
    return { title: "PLF News", description: "News, learning and updates from PLF.", alternates: { canonical: `/news/${id}` } };
  }
}

export default function NewsPage() {
  return <NewsDetail />;
}
