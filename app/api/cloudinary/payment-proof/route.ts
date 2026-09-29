import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const runtime = "nodejs";
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function POST(req: NextRequest) {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    if (!cloudName || !apiKey || !apiSecret) throw new Error("Cloudinary environment variables are missing.");
    cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret, secure: true });

    const file = (await req.formData()).get("file");
    if (!(file instanceof File)) return NextResponse.json({ error: "No proof image uploaded" }, { status: 400 });
    if (!ALLOWED_TYPES.has(file.type)) return NextResponse.json({ error: "Proof must be a JPG, PNG, or WebP image" }, { status: 400 });
    if (file.size > MAX_FILE_SIZE) return NextResponse.json({ error: "Proof image must be 5MB or less" }, { status: 400 });

    const dataUri = `data:${file.type};base64,${Buffer.from(await file.arrayBuffer()).toString("base64")}`;
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: `${process.env.CLOUDINARY_UPLOAD_FOLDER || "nisvarthjan"}/payment-proofs`,
      resource_type: "image",
      transformation: [{ width: 1800, height: 1800, crop: "limit" }, { quality: "auto:good", fetch_format: "auto" }],
    });
    return NextResponse.json({ url: result.secure_url, publicId: result.public_id, width: result.width, height: result.height });
  } catch (error) {
    console.error("Payment proof upload failed", error);
    return NextResponse.json({ error: "Payment proof upload failed" }, { status: 500 });
  }
}
