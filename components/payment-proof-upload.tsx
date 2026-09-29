"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

export function PaymentProofUpload({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const upload = async (file: File) => {
    setUploading(true); setError("");
    try {
      const data = new FormData(); data.append("file", file);
      const response = await fetch("/api/cloudinary/payment-proof", { method: "POST", body: data });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Upload failed");
      onChange(payload.url);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Upload failed");
    } finally { setUploading(false); }
  };

  return <div className="space-y-2">
    <label className="block text-sm font-medium">Payment proof screenshot *</label>
    <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary/35 bg-primary/5 px-4 py-5 text-sm font-semibold text-primary hover:border-primary">
      <Upload className="h-4 w-4" /> {uploading ? "Uploading..." : value ? "Replace payment proof" : "Upload payment proof"}
      <input className="hidden" type="file" accept="image/jpeg,image/png,image/webp" disabled={uploading} onChange={(event) => { const file = event.target.files?.[0]; if (file) void upload(file); }} />
    </label>
    {value && <img src={value} alt="Payment proof preview" className="max-h-48 rounded-lg border object-contain" />}
    <p className="text-xs text-muted-foreground">JPG, PNG, or WebP; maximum 5MB.</p>
    {error && <p className="text-sm text-destructive">{error}</p>}
  </div>;
}
