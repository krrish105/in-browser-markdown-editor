import { Roboto, Roboto_Slab, Roboto_Mono } from "next/font/google";

export const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
});

export const roboto_slab = Roboto_Slab({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-slab",
});

export const roboto_mono = Roboto_Mono({
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-mono",
});
