import React from "react";

interface LinkProps {
	className?: string | undefined;
	style?: React.CSSProperties | undefined;
	href: string | undefined;
	children: React.ReactNode;
}

const Link = ({ className, style, href, children }: LinkProps) => {
	return (
		<a
			className={className}
			style={style}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
};

export default Link;
