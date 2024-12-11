import { MergenIcon } from "@/assets/mergen-icon";
import Socials from "@/components/socials";
import BlurFade from "@/components/ui/blur-fade";
import ShineBorder from "@/components/ui/shine-border";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

export const HomePage = () => {
	return (
		<div className="w-full">
			{/* Hero Section */}
			<section className="px-6 lg:px-0 container min-h-[calc(100vh-60px)] mx-auto pt-8 place-content-center relative">
				<div className="flex flex-col-reverse sm:flex-row gap-24 justify-center align-center pb-36">
					{/* Photo */}
					<BlurFade delay={0.25} inView className="self-center">
						<ShineBorder
							className="p-0"
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
							borderWidth={2}
						>
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
								<Socials />
							</div>
						</BlurFade>
					</div>
				</div>
				<Link
					to="career"
					smooth={true}
					duration={1000}
					className=" hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
				>
					<ChevronDown className="size-8 text-foreground hover:text-primary transition-colors duration-300" />
				</Link>
			</section>

			<section id="career" className="bg-background border-y-2 border-white">
				<div className="container mx-auto px-6 lg:px-0 py-16">
					{/* Header */}
					<div className="w-full h-16 flex justify-center items-center pb-16">
						<h1 className="text-3xl font-bold">Career</h1>
					</div>

					{/* Mergen */}
					<div className="flex gap-6 w-full">
						<div className="">
							<MergenIcon className={"size-40 bg-[#f222dd] rounded p-2"} />
						</div>
						<div className="">
							<h3 className="text-3xl font-bold leading-[1]">Mergen</h3>
							<h4 className="text-primary mt-1.5 font-semibold">
								Frontend Software Engineer Intern
							</h4>
							<h4 className="my-1 font-semibold">
								Jul 2024 - <span>Now</span>
							</h4>
							<ul className="list-inside list-disc pt-2">
								<li>
									Translated Figma into visually appealing, pixel-perfect web
									pages using React, Tailwind CSS, and Typescript.
								</li>
								<li>
									Developed a text editor with SlateJS allowing students to
									write and format essays. Integrated commenting functionality
									using state management.
								</li>
								<li>
									Used Webflow to create a marketing website to attract new
									users onto the platform. Used built-in CMS to create a job
									board page for future Mergen applicants.
								</li>
								<li>
									Created a web scraping Python script using the Pandas and
									Requests libraries to collect essay prompts and other data
									from 328 colleges.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
