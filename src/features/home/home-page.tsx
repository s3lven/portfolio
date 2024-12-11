import BlurFade from "@/components/ui/blur-fade";
import { ChevronDown, FileUser } from "lucide-react";

export const HomePage = () => {
	return (
		<>
			{/* Hero Section */}
			<section className="container min-h-[calc(100vh-60px)] mx-auto pt-8 place-content-center">
				<div className="flex gap-24 justify-center align-center pb-36">
					{/* Photo */}
					<BlurFade delay={0.25} inView>
						<img
							src="./src/assets/hehe.jpg"
							alt="some random picture"
							className="rounded h-[28.5rem] md:h-[30rem] shadow-inner object-cover"
						/>
					</BlurFade>

					{/* Header */}
					<div className="flex flex-col justify-center gap-6">
						<BlurFade delay={0.25 * 2} inView>
							<span className="text-7xl font-bold text-foreground -m-1">
								Eriz Sartiga
							</span>
						</BlurFade>

						{/* Subtitle */}
						<BlurFade delay={0.25 * 2} inView>
							<h2 className="text-3xl font-semibold text-primary">
								Full Stack Software Developer
							</h2>
							<h2 className="text-xl">Bay Area, California, US</h2>
						</BlurFade>

						{/* Socials */}
						<BlurFade delay={0.25 * 2} inView>
							<div className="flex gap-4 pt-8">
								<a
									href="https://linkedin.com/in/eriz-sartiga"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src="./src/assets/linkedin.svg" />
								</a>
								<a
									href="https://github.com/s3lven"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src="./src/assets/github.svg" />
								</a>
								<a
									href="/website-resume.pdf"
									download="Eriz Sartiga - Resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FileUser size={36} color="#fb7185" />
								</a>

								
							</div>
						</BlurFade>
					</div>
				</div>
				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer">
					<ChevronDown className="size-8 text-foreground hover:text-primary transition-colors" />
				</div>
			</section>
		</>
	);
};
