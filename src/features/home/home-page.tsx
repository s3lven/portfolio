import { MergenIcon } from "@/assets/mergen-icon"
import ProjectCard from "@/components/project-card"
import Socials from "@/components/socials"
import BlurFade from "@/components/ui/blur-fade"
import ShineBorder from "@/components/ui/shine-border"
import { projects } from "@/types"
import { ChevronDown } from "lucide-react"
import { Link } from "react-scroll"

export const HomePage = () => {
	const techStack = [
		"typescript",
		"react",
		"vite",
		"nextjs",
		"tailwind",
		"figma",
		"node",
		"express",
		"postgresql",
		"git",
		"github",
	]

	const techExplored = ["python", "mongodb", "java", "c", "c++", "docker"]

	return (
		<main className="w-full scrollbar-thin scrollbar-webkit">
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
								src={import.meta.env.BASE_URL + "ewiz.webp"}
								alt="eriz's profile picture"
								className="rounded-lg w-full h-[28.5rem] md:h-[30rem] dark:shadow-inner shadow-lg object-cover"
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

			{/* Career Section */}
			<section id="career" className="bg-background border-y-2 border-white">
				<div className="container mx-auto px-6 lg:px-0 py-24">
					{/* Header */}
					<div className="w-full h-16 flex justify-center items-center pb-24">
						<h1 className="text-3xl font-bold">Career 💼</h1>
					</div>

					<div className="space-y-12">
						{/* OEE Intellisuite */}
						<BlurFade delay={0.25} inView>
							<div className="flex md:flex-row flex-col gap-6 w-full">
								<div className="">
									<div className="bg-white size-40 rounded ">
										<img className="p-2" src="oee-intellisuite.webp" />
									</div>
								</div>
								<div className="">
									<h3 className="text-3xl font-bold leading-[1]">
										OEE Intellisuite
									</h3>
									<h4 className="text-primary mt-1.5 font-semibold">
										Full Stack Engineer
									</h4>
									<h4 className="my-1 font-semibold">
										Feb 2025 - <span>Now</span>
									</h4>
									<ul className="list-inside list-disc pt-2 space-y-4">
										<li className="text-pretty">
											Executed end-to-end migration of a legacy C# web
											application to a modern stack (React, Typescript, ASP.NET
											Core), decoupling tightly coupled modules and reduced
											technical debt through code refactoring and following
											React best practices.
										</li>
										<li className="text-pretty">
											Spearheaded the development of a prototype for new
											features on the flagship product, enhancing its value
											propotision and receiving enthusiastic feedback from
											clients.
										</li>
										<li className="text-pretty">
											Designed and developed reusable React components with
											Typescript, improving UI consistency and reducing
											front-end development time for other developer teams.
										</li>
										<li className="text-pretty">
											Collaborated with QA and product managers in Scrum sprints
											to prioritize modernization tasks and new features.
										</li>
									</ul>
								</div>
							</div>
						</BlurFade>

						{/* Mergen */}
						<BlurFade delay={0.25} inView>
							<div className="flex md:flex-row flex-col gap-6 w-full">
								<div className="">
									<MergenIcon className={"size-40 bg-[#f222dd] rounded p-2"} />
								</div>
								<div className="">
									<h3 className="text-3xl font-bold leading-[1]">Mergen</h3>
									<h4 className="text-primary mt-1.5 font-semibold">
										Frontend Software Engineer Intern
									</h4>
									<h4 className="my-1 font-semibold">
										Jul 2024 - <span>Feb 2025</span>
									</h4>
									<ul className="list-inside list-disc pt-2 space-y-4">
										<li className="text-pretty">
											Translated Figma designs into visually appealing,
											pixel-perfect web pages using React, Tailwind CSS, and
											Typescript.
										</li>
										<li className="text-pretty">
											Developed a text editor with SlateJS allowing students to
											write and format essays. Integrated commenting
											functionality using Zustand.
										</li>
										<li className="text-pretty">
											Used Webflow to create a marketing website to attract new
											users onto the platform. Used built-in CMS to create a job
											board page for future Mergen applicants.
										</li>
										<li className="text-pretty">
											Created a web scraping Python script using the Pandas and
											Requests libraries to collect essay prompts and other data
											from 328 colleges.
										</li>
									</ul>
								</div>
							</div>
						</BlurFade>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section
				id="skills"
				className="px-6 lg:px-0 container mx-auto py-24 place-content-center"
			>
				{/* Header */}
				<div className="w-full h-16 flex justify-center items-center pb-24">
					<h1 className="text-3xl font-bold">Skills 🛠️</h1>
				</div>

				<BlurFade delay={0.25} inView>
					<div className="h-auto flex justify-center gap-6 flex-col md:flex-row">
						<div className="w-full p-6 rounded-md backdrop-blur-sm border-primary border">
							<h3 className="text-lg font-semibold ">The 'Full-Stack' 🥞</h3>
							<h4 className="text-lg font-medium pt-4">
								My go-to for whenver an idea comes to mind, often used for quick
								prototyping!
							</h4>
							<div className="flex flex-wrap gap-4 pt-8">
								{techStack.map((tech) => (
									<img
										key={tech}
										src={import.meta.env.BASE_URL + `tech-icons/${tech}.svg`}
										className="size-10"
									/>
								))}
							</div>
						</div>

						<div className="w-full p-6 rounded-md backdrop-blur-sm border-primary border">
							<h3 className="text-lg font-semibold ">Tech I've Explored 🔎</h3>
							<h4 className=" text-lg font-medium pt-4">
								Used in learning projects, allowing me to grasp their features
								and applications.
							</h4>
							<div className="flex flex-wrap gap-4 pt-8">
								{techExplored.map((tech) => (
									<img
										key={tech}
										src={import.meta.env.BASE_URL + `tech-icons/${tech}.svg`}
										className="size-10"
									/>
								))}
							</div>
						</div>
					</div>
				</BlurFade>
			</section>

			{/* Projects Section */}
			<section
				id="skills"
				className="px-6 lg:px-0 place-content-center bg-background border-y-2 border-white"
			>
				<div className="container mx-auto px-6 lg:px-0 py-24">
					{/* Header */}
					<div className="w-full h-16 flex justify-center items-center pb-24">
						<h1 className="text-3xl font-bold">Projects 🚀</h1>
					</div>

					<div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-6">
						{projects.map((project) => (
							<ProjectCard project={project} />
						))}
					</div>
				</div>
			</section>
		</main>
	)
}
