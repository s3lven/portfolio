interface Project {
	name: string;
	description: string;
	website?: string;
	source?: string;
	image: string;
}

export const projects: Project[] = [
	{
		name: "Portfolio Website",
		description: "My website showcasing my career, skills, and projects",
		website: "",
		source: "",
		image: "",
	},
	{
		name: "Taikai",
		description: "A tournament bracket manager for Kendo!",
		website: "",
		source: "",
		image: "./src/assets/taikai.webp",
	},
];

export type { Project };
