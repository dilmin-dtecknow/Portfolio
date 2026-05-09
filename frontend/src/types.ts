export interface About {
    name: string;
    bio: string;
    skills: string[];
    technologies: {
        category: string;
        skills: string[];
    }[];
}

export interface Education {
    name: string;
    school: string;
    logo: string;
    details: string;
    startDate: string;
    endDate: string;
}

export interface Projects {
    title: string;
    description: string;
    techStack: string[];
    githubLink: string;
    liveLink: string;
    images: string[];
    createdAt: {
        type: Date;
    }
}