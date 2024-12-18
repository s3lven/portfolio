import Socials from "./socials";

export const Footer = () => {
	return (
		<footer className="border-t-2 border-white place-content-center bg-background py-9 flex flex-col mt-[200px]">
			<div className="place-content-center">
				<div className="flex gap-4 justify-center">
					<Socials />
				</div>
				<div className="mt-2 flex justify-center items-center font-bold text-lg">
					Created by Eriz Sartiga
				</div>
			</div>
		</footer>
	);
};
