import type { About } from "../types";

//public route
const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"


export async function getAbout(): Promise<About> {
  const res = await fetch(`${API_URL}/api/about`);
  if (!res.ok) throw new Error("Failed to Load About!");
  return res.json() as Promise<About>;
}

