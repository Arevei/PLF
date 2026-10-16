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

// Editorial articles grounded in PLF's published focus areas. They describe approach and practice,
// not specific events, so they stay accurate until the team publishes its own field updates.
const news = [
  {
    title: "Knowledge for Change: How PLF Approaches Civil-Society Strengthening",
    titleHindi: "बदलाव के लिए ज्ञान: नागरिक समाज को सशक्त करने का PLF का दृष्टिकोण",
    excerpt: "Why PLF focuses on the people, organisations and systems that sustain social change.",
    body: [
      "Passion for the Least Foundation works on a simple idea: communities are best served by organisations that are capable, accountable and connected.",
      "Our work brings together knowledge, capacity building, leadership, governance and collaboration so that NGOs, self-help groups and community institutions can continue to deliver long after a single project ends.",
      "Across eight connected focus areas, we listen first, share what works, strengthen practical systems and help partners measure and learn from their results.",
    ],
    imageUrl: "/images/editorial/rural-women-shg-meeting.webp",
    category: "Organisational Development",
  },
  {
    title: "Why Sound Governance and Financial Systems Matter for Grassroots Organisations",
    titleHindi: "जमीनी संगठनों के लिए सुदृढ़ शासन और वित्तीय प्रणालियाँ क्यों ज़रूरी हैं",
    excerpt: "Clear records, shared decisions and transparent accounts build the trust that communities and partners rely on.",
    body: [
      "For a self-help group or a small NGO, governance is not paperwork. It is how members agree on decisions, track their money and stay accountable to one another.",
      "Simple practices such as regular meetings, written minutes, up-to-date books of accounts and clear roles for office bearers make organisations more resilient and more credible with banks, donors and government programmes.",
      "PLF supports these foundations through practical learning on financial management, internal controls, compliance and transparent reporting.",
    ],
    imageUrl: "/images/editorial/community-leadership-india.webp",
    category: "Governance & Finance",
  },
  {
    title: "Self-Help Groups as Institutions: Building Capacity That Lasts",
    titleHindi: "संस्था के रूप में स्वयं सहायता समूह: टिकाऊ क्षमता का निर्माण",
    excerpt: "Strong groups grow from good facilitation, shared leadership and steady learning.",
    body: [
      "Self-help groups are among the most important community institutions in rural India. Their strength depends on how well members are able to plan, lead and solve problems together.",
      "Facilitated learning sessions help groups set goals, rotate leadership, resolve conflicts and connect with federations and public schemes.",
      "PLF treats these groups as institutions in their own right and focuses on the organisational capacity that keeps them active for years.",
    ],
    imageUrl: "/images/editorial/shg-facilitated-training.webp",
    category: "Capacity Building",
  },
  {
    title: "Digital Tools for Community Organisations: Starting With the Basics",
    titleHindi: "सामुदायिक संगठनों के लिए डिजिटल उपकरण: बुनियादी बातों से शुरुआत",
    excerpt: "Responsible technology begins with confidence, simple systems and good data habits.",
    body: [
      "Many grassroots organisations want to use technology but are unsure where to begin. The answer is rarely a complex system.",
      "Basic digital skills, shared spreadsheets, secure storage of member records and clear data-protection practices already make reporting faster and decisions better informed.",
      "PLF's digital transformation work helps teams adopt tools at a pace that fits their context while keeping community data safe.",
    ],
    imageUrl: "/images/editorial/rural-digital-workshop.webp",
    category: "Digital Transformation",
  },
  {
    title: "Using Everyday Records to Learn What Works",
    titleHindi: "रोज़मर्रा के रिकॉर्ड से सीखना कि क्या काम करता है",
    excerpt: "Monitoring is most useful when frontline teams can use the data they collect.",
    body: [
      "Frontline workers and community volunteers collect information every day through registers, visit notes and attendance sheets.",
      "When those records are simple, consistent and reviewed together, they show which activities are making a difference and where support is needed.",
      "PLF's monitoring, evaluation and learning work focuses on practical indicators and regular reflection, so that evidence improves the work rather than only reporting on it.",
    ],
    imageUrl: "/images/editorial/frontline-health-records.webp",
    category: "Impact & Learning",
  },
  {
    title: "Community Voice in Local Governance",
    titleHindi: "स्थानीय शासन में समुदाय की आवाज़",
    excerpt: "Gram sabhas and community forums are where local priorities become shared decisions.",
    body: [
      "Village assemblies and community forums give people a direct say in decisions about their resources, services and development priorities.",
      "Civil-society organisations play an important role in helping communities prepare for these forums, understand their rights and bring evidence from everyday experience.",
      "PLF's policy and dialogue work connects that local evidence with institutions and decision-makers in the wider development sector.",
    ],
    imageUrl: "/images/editorial/gram-sabha-mendha-lekha.webp",
    category: "Policy & Dialogue",
  },
].map((article, index) => ({
  id: 7101 + index,
  title: article.title,
  titleHindi: article.titleHindi,
  content: article.body.map((paragraph) => `<p>${paragraph}</p>`).join(""),
  excerpt: article.excerpt,
  imageUrl: article.imageUrl,
  category: article.category,
  author: "PLF Team",
  publishedAt: new Date(now.getTime() - (index + 1) * day),
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

// Programme campaigns. Totals start at zero and are only changed by real donations.
const campaigns = [
  {
    title: "Train Self-Help Group Leaders in Bookkeeping and Governance",
    titleHindi: "स्वयं सहायता समूह की नेतृत्वकर्ताओं को लेखा-जोखा और शासन का प्रशिक्षण",
    description: "<p>Help women leaders of rural self-help groups learn to keep accurate books of accounts, run transparent meetings and manage group savings with confidence.</p><p>Your support covers training sessions, simple record-keeping materials and follow-up mentoring.</p>",
    descriptionHindi: "<p>ग्रामीण स्वयं सहायता समूहों की महिला नेतृत्वकर्ताओं को सही लेखा-जोखा रखने, पारदर्शी बैठकें चलाने और समूह की बचत को आत्मविश्वास से प्रबंधित करने में सहायता करें।</p>",
    goalAmount: 300000,
    category: "women",
    imageUrl: "/images/editorial/community-leadership-india.webp",
  },
  {
    title: "Digital Skills for Grassroots NGO Teams",
    titleHindi: "जमीनी स्तर की NGO टीमों के लिए डिजिटल कौशल",
    description: "<p>Equip small NGO and community-organisation teams with basic digital skills: email, spreadsheets, safe data handling and online reporting.</p><p>Funds support hands-on workshops and practice resources in local languages.</p>",
    descriptionHindi: "<p>छोटे NGO और सामुदायिक संगठनों की टीमों को ईमेल, स्प्रेडशीट, सुरक्षित डेटा प्रबंधन और ऑनलाइन रिपोर्टिंग जैसे बुनियादी डिजिटल कौशल प्रदान करें।</p>",
    goalAmount: 250000,
    category: "education",
    imageUrl: "/images/editorial/rural-digital-workshop.webp",
  },
  {
    title: "Community Learning Circles for Rural Women",
    titleHindi: "ग्रामीण महिलाओं के लिए सामुदायिक सीखने के समूह",
    description: "<p>Support facilitated learning circles where rural women discuss livelihoods, rights, public schemes and leadership, and plan action together.</p><p>Contributions fund trained facilitators and learning materials.</p>",
    descriptionHindi: "<p>सहायक-संचालित सीखने के समूहों का समर्थन करें, जहाँ ग्रामीण महिलाएँ आजीविका, अधिकार, सरकारी योजनाओं और नेतृत्व पर चर्चा कर साथ मिलकर योजना बनाती हैं।</p>",
    goalAmount: 150000,
    category: "rural",
    imageUrl: "/images/editorial/women-self-driven-futures.webp",
  },
  {
    title: "Better Records for Community Health Volunteers",
    titleHindi: "सामुदायिक स्वास्थ्य स्वयंसेवकों के लिए बेहतर रिकॉर्ड",
    description: "<p>Help community health volunteers keep clear, consistent records and use them to follow up with families who need support.</p><p>Your gift supports training on simple monitoring tools and regular review meetings.</p>",
    descriptionHindi: "<p>सामुदायिक स्वास्थ्य स्वयंसेवकों को स्पष्ट और नियमित रिकॉर्ड रखने तथा ज़रूरतमंद परिवारों तक फॉलो-अप करने में मदद करें।</p>",
    goalAmount: 200000,
    category: "health",
    imageUrl: "/images/editorial/frontline-health-records.webp",
  },
].map((campaign, index) => ({
  id: 6101 + index,
  ...campaign,
  raisedAmount: 0,
  donorCount: 0,
  isActive: true,
  startDate: now,
  endDate: new Date(now.getTime() + 120 * day),
  createdAt: new Date(now.getTime() - index * 60 * 1000),
}));

function withoutTotals({ raisedAmount, donorCount, ...rest }) {
  return rest;
}

async function upsertMany(db, collectionName, docs) {
  const ops = docs.map((doc) => ({
    updateOne: {
      filter: { id: doc.id },
      // Never overwrite live donation totals when the seed is re-run.
      update: collectionName === "campaigns"
        ? { $set: withoutTotals(doc), $setOnInsert: { raisedAmount: doc.raisedAmount, donorCount: doc.donorCount } }
        : { $set: doc },
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

