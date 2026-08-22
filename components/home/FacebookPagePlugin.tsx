"use client";

import { useEffect } from "react";
import Script from "next/script";
// import { Facebook } from "lucide-react";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/passionfortheleast";

declare global {
  interface Window {
    FB?: {
      XFBML?: {
        parse: () => void;
      };
    };
  }
}

export function FacebookPagePlugin() {
  useEffect(() => {
    window.FB?.XFBML?.parse();
  }, []);

  return (
    <section className="bg-muted/45 py-12 sm:py-16">
      <Script id="facebook-jssdk" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v23.0" strategy="afterInteractive" />
      <div id="fb-root" />
      <div className="container mx-auto grid gap-8 px-5 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Social updates</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary sm:text-4xl">Follow Passion for the Least</h2>
          <div className="mt-4 h-1 w-10 bg-accent" />
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            See campaign updates, field moments, and community announcements directly from our Facebook page.
          </p>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            {/* <Facebook className="size-4" /> */}
            Open Facebook Page
          </a>
        </div>

        <div className="overflow-hidden rounded-[8px] border bg-card p-3 shadow-sm">
          <div
            className="fb-page w-full"
            data-href={FACEBOOK_PAGE_URL}
            data-tabs="timeline"
            data-width=""
            data-height="520"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite={FACEBOOK_PAGE_URL} className="fb-xfbml-parse-ignore">
              <a href={FACEBOOK_PAGE_URL}>Passion For The Least</a>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

