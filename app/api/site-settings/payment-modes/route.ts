import { NextResponse } from "next/server";
import { getDonationPaymentMode, getMembershipPaymentMode } from "@/lib/site-settings";

export async function GET() {
  const [membershipPaymentMode, donationPaymentMode] = await Promise.all([
    getMembershipPaymentMode(),
    getDonationPaymentMode(),
  ]);
  return NextResponse.json({ membershipPaymentMode, donationPaymentMode });
}
