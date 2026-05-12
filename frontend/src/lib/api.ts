import type { About, Education, Experience, Projects, Testermonials } from "../types";

//public route
const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"

//About
export async function getAbout(): Promise<About> {
    const res = await fetch(`${API_URL}/api/about`);
    if (!res.ok) throw new Error("Failed to Load About!");
    return res.json() as Promise<About>;
}

//Education
export async function getEducation(): Promise<Education[]> {
    const res = await fetch(`${API_URL}/api/education`);
    if (!res.ok) throw new Error("Failed to Load Education!");
    return res.json() as Promise<Education[]>;
}

//Project
export async function getProjects(): Promise<Projects[]> {
    const res = await fetch(`${API_URL}/api/projects`);
    if (!res.ok) throw new Error("Faild to load Projects");
    return res.json() as Promise<Projects[]>;
}

//Experience
export async function getExperience(): Promise<Experience[]> {
    const res = await fetch(`${API_URL}/api/experiences`)
    if (!res.ok) throw Error("faild to get Experience!")
    return res.json() as Promise<Experience[]>
}

//Testermonials
export async function getTestermonials(): Promise<Testermonials[]> {

    const res = await fetch(`${API_URL}/api/testermonials`);
    if (!res.ok) throw Error("Faild to get Testermonials!");
    return res.json() as Promise<Testermonials[]>

}