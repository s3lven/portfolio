import ThemeProvider from "@/features/dark-mode/theme-provider";
import { BrowserRouter } from "react-router";

type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<BrowserRouter basename="/portfolio/">
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				{children}
			</ThemeProvider>
		</BrowserRouter>
	);
};
