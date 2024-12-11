import { Github, Linkedin } from "@/assets/social-icons";
import BlurFade from "@/components/ui/blur-fade";
import ShineBorder from "@/components/ui/shine-border";
import { ChevronDown, FileUser } from "lucide-react";

export const HomePage = () => {
	return (
		<>
			{/* Hero Section */}
			<section className="px-6 lg:px-0 container min-h-[calc(100vh-60px)] mx-auto pt-8 place-content-center">
				<div className="flex flex-col-reverse sm:flex-row gap-24 justify-center align-center pb-36">
					{/* Photo */}
					<BlurFade delay={0.25} inView className="self-center">
						<ShineBorder 
							className="p-0"
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
							borderWidth={2}>
							<img
								src="./src/assets/hehe.jpg"
								alt="some random picture"
								className="rounded-lg w-full h-[28.5rem] md:h-[30rem] dark:shadow-inner shadow-lg object-fit"
							/>
						</ShineBorder>
					</BlurFade>

					{/* Header */}
					<div className="flex flex-col justify-center gap-6">
						<BlurFade delay={0.25} inView>
							<span className="text-7xl font-bold text-foreground -m-1">
								Eriz Sartiga
							</span>
						</BlurFade>

						{/* Subtitle */}
						<BlurFade delay={0.25} inView>
							<h2 className="text-3xl font-semibold text-primary">
								Full Stack Software Developer
							</h2>
							<h2 className="text-xl font-semibold">
								Bay Area, California, US
							</h2>
						</BlurFade>

						{/* Socials */}
						<BlurFade delay={0.25} inView>
							<div className="flex gap-4 pt-8">
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
									<FileUser
										size={36}
										className=" text-rose-400 hover:text-rose-400/80"
									/>
								</a>
							</div>
						</BlurFade>
					</div>
				</div>
				<div className=" hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer">
					<ChevronDown className="size-8 text-foreground hover:text-primary transition-colors duration-300" />
				</div>
			</section>

			<section className="px-6 ">

			</section>
		</>
	);
};
