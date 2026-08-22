"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NewsItem = {
  id: number;
  title: string;
};

export function NewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news?limit=5");
        if (res.ok) {
          const data = await res.json();
          setNews(data);
        }
      } catch {
        // Keep the ticker quiet when news cannot be loaded.
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const hasNews = !loading && news.length > 0;
  const items = hasNews ? [...news, ...news] : [];

  return (
    <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="flex items-center">
        {hasNews && (
          <div className="flex shrink-0 items-center gap-2 bg-primary-foreground/15 px-4 py-2.5">
            <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wider">News</span>
          </div>
        )}

        <div className="relative min-w-0 flex-1 overflow-hidden py-2.5">
          {hasNews ? (
            <div className="animate-marquee flex whitespace-nowrap">
              {items.map((item, idx) => (
                <span key={`${item.id}-${idx}`} className="mx-6 inline-flex items-center gap-3 text-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-foreground/50" />
                  <Link href="/news" className="max-w-[220px] truncate hover:underline lg:max-w-xs">
                    {item.title}
                  </Link>
                </span>
              ))}
            </div>
          ) : (
            <div className="flex items-center px-4 text-sm">
              <span className="text-primary-foreground/80">Welcome to PLF, Passion for the Least Foundation</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

