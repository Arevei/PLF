const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

function loadEnv(file) {
  const envPath = path.join(process.cwd(), file);
  if (!fs.existsSync(envPath)) return;

  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const equalsAt = trimmed.indexOf("=");
    if (equalsAt === -1) continue;

    const key = trimmed.slice(0, equalsAt).trim();
    const rawValue = trimmed.slice(equalsAt + 1).trim();
    process.env[key] = rawValue.replace(/^["']|["']$/g, "");
  }
}

loadEnv(".env.local");

const uri = process.env.DATABASE_URL;
const dbName = process.env.MONGODB_DB_NAME || "nisvarthjan";

if (!uri) {
  throw new Error("DATABASE_URL is not set");
}

const now = new Date();
const day = 24 * 60 * 60 * 1000;

const news = [
  ["PLF Launches Clean Water Points in Bundelkhand", "Water access expands with locally maintained drinking stations.", "/images/Rural-Development.png", "Water", 1],
  ["Scholarship Mentors Meet First-Generation Learners", "Students receive mentoring support alongside annual school assistance.", "/images/education.webp", "Education", 2],
  ["Animal Care Camp Reaches Rural Households", "Veterinary teams support working animals with treatment and awareness sessions.", "/gallery/events/event-5.webp", "Animal Welfare", 3],
  ["Women Complete Enterprise Readiness Training", "Self-help group members build confidence in budgeting, pricing, and sales.", "/images/women-development.jpg", "Livelihoods", 4],
  ["Community Volunteers Lead Plantation Drive", "Local youth and families plant native saplings for healthier public spaces.", "/images/environment.webp", "Environment", 5],
  ["Village Health Desk Connects Families to Care", "Frontline volunteers help families access essential health information.", "/images/healthcare.jpg", "Health", 6],
  ["Youth Clubs Host Learning Circle Sessions", "Children practice reading, teamwork, and creative problem-solving together.", "/gallery/events/event-2.webp", "Youth", 7],
  ["Field Team Reviews New Livelihood Clusters", "Program teams map needs for upcoming skill development cohorts.", "/gallery/events/event-3.webp", "Field Update", 8],
].map(([title, excerpt, imageUrl, category, offset], index) => ({
  id: 7001 + index,
  title,
  content: `${excerpt} This demo article is seeded for testing the home page news scroll.`,
  excerpt,
  imageUrl,
  category,
  author: "PLEF Field Team",
  publishedAt: new Date(now.getTime() - Number(offset) * day),
}));

const gallery = [
  ["Drinking Water Facility Inauguration", "/gallery/events/event-1.webp", "events", 1],
  ["Volunteer Team at Service Point", "/gallery/events/event-2.webp", "events", 2],
  ["Counselling Support Session", "/gallery/events/event-3.webp", "events", 3],
  ["Women Welfare Interaction", "/gallery/events/event-4.webp", "events", 4],
  ["Community Participation", "/gallery/events/event-5.webp", "events", 5],
  ["Office Service Desk", "/gallery/events/event-6.webp", "events", 6],
  ["Leadership Presence", "/gallery/events/event-7.webp", "events", 7],
  ["Environmental Awareness Activity", "/impact/impact-4.webp", "impact", 8],
  ["Children's Learning Moment", "/impact/impact-5.webp", "impact", 9],
].map(([caption, imageUrl, category, offset], index) => ({
  id: 8001 + index,
  imageUrl,
  imageUrls: [imageUrl],
  caption,
  category,
  createdAt: new Date(now.getTime() - Number(offset) * day),
}));

const campaigns = [
  ["Clean Water for Rural Families", "Install safe drinking water points and local maintenance support in underserved villages.", 2500000, 1876000, "Water", "/images/Rural-Development.png", 318, 1],
  ["Scholarships for First-Generation Learners", "Keep children in school with annual education support, mentoring, and learning material.", 1200000, 760000, "Education", "/images/education.webp", 205, 2],
  ["Animal Health and Rescue Camps", "Bring veterinary care, vaccination, and rescue support to animals in rural communities.", 900000, 410000, "Animal Welfare", "/images/healthcare.jpg", 136, 3],
  ["Women Enterprise Starter Kits", "Equip trained women with tools, market linkages, and working capital support.", 1500000, 640000, "Livelihoods", "/images/women-development.jpg", 184, 4],
  ["Native Trees for Community Spaces", "Create shaded, climate-resilient community areas with native plantation drives.", 700000, 295000, "Environment", "/images/environment.webp", 97, 5],
].map(([title, description, goalAmount, raisedAmount, category, imageUrl, donorCount, offset], index) => ({
  id: 6001 + index,
  title,
  description,
  goalAmount,
  raisedAmount,
  category,
  imageUrl,
  isActive: true,
  donorCount,
  startDate: new Date(now.getTime() - Number(offset) * day * 14),
  endDate: new Date(now.getTime() + Number(offset) * day * 45),
  createdAt: new Date(now.getTime() - Number(offset) * day),
}));

async function upsertMany(db, collectionName, docs) {
  const ops = docs.map((doc) => ({
    updateOne: {
      filter: { id: doc.id },
      update: { $set: doc },
      upsert: true,
    },
  }));

  const result = await db.collection(collectionName).bulkWrite(ops);
  return { matched: result.matchedCount, modified: result.modifiedCount, upserted: result.upsertedCount };
}

async function main() {
  const client = new MongoClient(uri);
  await client.connect();

  try {
    const db = client.db(dbName);
    const results = {
      news: await upsertMany(db, "news", news),
      gallery: await upsertMany(db, "gallery", gallery),
      campaigns: await upsertMany(db, "campaigns", campaigns),
    };
    console.log(JSON.stringify(results, null, 2));
  } finally {
    await client.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

