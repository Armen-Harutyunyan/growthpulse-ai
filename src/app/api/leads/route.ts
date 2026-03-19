import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

async function ensureDataDir() {
  const dir = path.join(process.cwd(), "data");
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic server-side validation
    if (!data.name || !data.email || !data.website) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Capture precise timestamp
    const lead = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      ...data,
    };

    // Persist to local JSON file
    await ensureDataDir();
    let leads = [];
    try {
      const existing = await fs.readFile(LEADS_FILE, "utf-8");
      leads = JSON.parse(existing);
    } catch {
      // File doesn't exist yet, start with empty array
    }

    leads.push(lead);
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));

    console.info(`[Lead Captured] ${lead.id}: ${lead.name} (${lead.email})`);

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (error) {
    console.error("[API Error] Lead submission failed:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
