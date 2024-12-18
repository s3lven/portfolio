import { Project } from "@/types";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<div
			className={`relative w-full p-6 rounded-md border-primary border flex flex-col gap-4 justify-end aspect-video overflow-hidden group transform transition duration-300 hover:scale-105 bg-cover text-white`}
			style={{ backgroundImage: `url(${project.image})` }}
		>
			{/* Dark Overlay */}
			<div className="-z-50 absolute inset-0 bg-black bg-opacity-0 backdrop-blur-0 transition-all duration-300 ease-in-out group-hover:bg-opacity-50 group-hover:backdrop-blur-sm"></div>
			<h3 className="text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
				{project.name}
			</h3>
			<h4 className="text-lg font-medium opacity-0 group-hover:opacity-100 transition duration-300">
				{project.description}
			</h4>
			<div className="flex font-semibold gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
				<a href="#" className={`text-primary ${!project.website && "hidden"}`}>
					Website
				</a>
				<a href="#" className={`text-primary ${!project.source && "hidden"}`}>
					Source
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
