export interface About {
    name: string;
    bio: string;
    skills: string[];
    technologies: {
        category: string;
        skills: string[];
    }[];
}
