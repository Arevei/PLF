"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getStoredReferralCode } from "@/lib/referral-code";

type CampaignShareProps = {
  title: string;
  campaignPath: string;
  compact?: boolean;
  className?: string;
};

function getShareUrl(campaignPath: string) {
  const url = new URL(campaignPath, window.location.origin);
  const current = new URLSearchParams(window.location.search).get("ref");
  const referralCode = current || getStoredReferralCode();
  if (referralCode) url.searchParams.set("ref", referralCode);
  return url.toString();
}

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(value);
  const field = document.createElement("textarea");
  field.value = value;
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  document.execCommand("copy");
  field.remove();
}

export function CampaignShare({ title, campaignPath, compact = false, className }: CampaignShareProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const copy = async () => {
    try {
      await copyToClipboard(getShareUrl(campaignPath));
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setStatus("error");
    }
  };

  const nativeShare = async () => {
    const url = getShareUrl(campaignPath);
    if (!navigator.share) return copy();
    try {
      await navigator.share({ title, text: `Support ${title}`, url });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setStatus("error");
    }
  };

  const open = (network: "whatsapp" | "facebook" | "linkedin" | "x") => {
    const url = encodeURIComponent(getShareUrl(campaignPath));
    const text = encodeURIComponent(`Support ${title}`);
    const destinations = {
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      x: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    };
    window.open(destinations[network], "_blank", "noopener,noreferrer,width=720,height=640");
  };

  if (compact) {
    return (
      <div className={cn("relative", className)}>
        <button type="button" onClick={nativeShare} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-primary/20 px-3 text-sm font-semibold text-primary transition hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label={`Share ${title}`}>
          {status === "copied" ? <Check className="size-4" /> : <Share2 className="size-4" />}
          {status === "copied" ? "Link copied" : "Share"}
        </button>
        <span className="sr-only" aria-live="polite">{status === "copied" ? "Campaign link copied" : status === "error" ? "Unable to share this campaign" : ""}</span>
      </div>
    );
  }

  const buttonClass = "inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/20 bg-white px-4 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
  return (
    <div className={cn("rounded-2xl border border-primary/15 bg-primary/[.035] p-4", className)}>
      <p className="mb-3 text-sm font-semibold text-foreground">Share this campaign</p>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={nativeShare} className={buttonClass} aria-label={`Share ${title}`}><Share2 className="size-4" /> Share</button>
        <button type="button" onClick={() => open("whatsapp")} className={buttonClass} aria-label={`Share ${title} on WhatsApp`}><MessageCircle className="size-4" /> WhatsApp</button>
        <button type="button" onClick={() => open("facebook")} className={buttonClass} aria-label={`Share ${title} on Facebook`}><span aria-hidden="true" className="font-bold">f</span> Facebook</button>
        <button type="button" onClick={() => open("linkedin")} className={buttonClass} aria-label={`Share ${title} on LinkedIn`}><span aria-hidden="true" className="font-bold">in</span> LinkedIn</button>
        <button type="button" onClick={() => open("x")} className={buttonClass} aria-label={`Share ${title} on X`}><span aria-hidden="true" className="font-bold">X</span> X</button>
        <button type="button" onClick={copy} className={buttonClass} aria-label={`Copy link to ${title}`}>{status === "copied" ? <Check className="size-4" /> : <Copy className="size-4" />} {status === "copied" ? "Copied" : "Copy link"}</button>
      </div>
      <p className={cn("mt-2 text-xs", status === "error" ? "text-destructive" : "text-muted-foreground")} aria-live="polite">
        {status === "copied" ? "Campaign link copied to your clipboard." : status === "error" ? "Sharing was unavailable. Please try Copy link." : "Member referral codes are kept in shared links."}
      </p>
    </div>
  );
}
