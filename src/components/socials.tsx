import { Github, Linkedin } from "@/assets/social-icons";
import { FileUser } from "lucide-react";

export const Socials = () => {
	return (
		<>
			<a
				href="https://linkedin.com/in/eriz-sartiga"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Linkedin className="text-sky-500 hover:text-sky-500/80" />
			</a>
			<a
				href="https://github.com/s3lven"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Github className="text-slate-900 dark:text-white hover:text-slate-900/70 dark:hover:text-slate-300" />
			</a>
			<a
				href="/website-resume.pdf"
				download="Eriz Sartiga - Resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FileUser size={36} className=" text-rose-400 hover:text-rose-400/80" />
			</a>
		</>
	);
};
export default Socials;
