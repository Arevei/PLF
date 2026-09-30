"use client";

import { useEffect } from "react";
import Script from "next/script";
import { ArrowUpRight, MessageCircle, Users } from "lucide-react";

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
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <Script id="facebook-jssdk" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v23.0" strategy="afterInteractive" />
      <div id="fb-root" />
      <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[28px] border border-[#dce5e9] bg-[#f7fbfc] shadow-[0_20px_60px_rgba(23,45,63,.08)] lg:grid-cols-[.85fr_1.15fr]">
        <div className="relative flex flex-col justify-center overflow-hidden p-7 sm:p-10 lg:p-14">
          <div className="absolute -left-20 -top-20 size-56 rounded-full bg-primary/10 blur-2xl" />
          <div className="relative">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#1877f2] text-lg font-black text-white shadow-lg shadow-[#1877f2]/20">f</div>
            <p className="mt-8 text-[10px] font-bold uppercase tracking-[.2em] text-primary">Social updates</p>
            <h2 className="editorial-heading mt-3 max-w-md text-5xl leading-[.92] text-[#172d3f] sm:text-6xl">Follow the work as it unfolds.</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#5d6b73] sm:text-base">Field moments, programme updates and community stories — shared directly by Passion for the Least.</p>
            <div className="mt-8 flex flex-wrap gap-3"><span className="inline-flex items-center gap-2 rounded-full border border-[#d7e5ed] bg-white px-3 py-2 text-xs font-semibold text-[#52636b]"><Users className="size-3.5 text-primary" /> Community stories</span><span className="inline-flex items-center gap-2 rounded-full border border-[#d7e5ed] bg-white px-3 py-2 text-xs font-semibold text-[#52636b]"><MessageCircle className="size-3.5 text-primary" /> Live updates</span></div>
            <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#172d3f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary">Visit Facebook <ArrowUpRight className="size-4" /></a>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-7 lg:p-9">
          <div className="mb-4 flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#68747b]">Latest from Facebook</p><span className="flex items-center gap-1.5 text-xs font-semibold text-primary"><span className="size-2 rounded-full bg-[#35b96c]" /> Live feed</span></div>
          <div className="overflow-hidden rounded-2xl border border-[#dce5e9] bg-white p-3 shadow-sm">
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
      </div>
    </section>
  );
}
