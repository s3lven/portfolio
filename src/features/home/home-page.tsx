import Socials from "@/components/socials";
import BlurFade from "@/components/ui/blur-fade";
import ShineBorder from "@/components/ui/shine-border";
import { ChevronDown } from "lucide-react";

export const HomePage = () => {
	return (
		<>
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
				<div className=" hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer">
					<ChevronDown className="size-8 text-foreground hover:text-primary transition-colors duration-300" />
				</div>
			</section>

			<section className="px-6 "></section>
		</>
	);
};
