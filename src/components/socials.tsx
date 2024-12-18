import { Github, Linkedin } from "@/assets/social-icons";
import { FileUser } from "lucide-react";
import Link from "./link";

export const Socials = () => {
	return (
		<>
			<Link
				href="https://linkedin.com/in/eriz-sartiga"
			>
				<Linkedin className="text-sky-500 hover:text-sky-500/80" />
			</Link>
			<Link
				href="https://github.com/s3lven"
			>
				<Github className="text-slate-900 dark:text-white hover:text-slate-900/70 dark:hover:text-slate-300" />
			</Link>
			<a
				href="website-resume.pdf"
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
