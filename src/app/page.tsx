import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ErgotherapySection from "./components/Ergotherapy";
import IBCLCSection from "./components/IBCLC";
import ConsultationSection from "./components/Consultation";
import AboutSection from "./components/About";
import AppointmentSection from "./components/Appointment";
import FundingSection from "./components/Funding";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import { getHomepage } from "./data/homepage";
import { SITE_DESCRIPTION, SITE_TITLE } from "./data/practice";

export async function generateMetadata(): Promise<Metadata> {
	const { data } = await getHomepage();
	const title = data.meta_title || SITE_TITLE;
	const description = data.meta_description || SITE_DESCRIPTION;

	return {
		title,
		description,
		alternates: { canonical: "/" },
		openGraph: {
			type: "website",
			locale: "fr_FR",
			url: "/",
			siteName: `${data.header_name || "Anaïs Glabi-Mus"} – Ergothérapeute`,
			title,
			description,
		},
		twitter: { card: "summary_large_image", title, description },
	};
}

export default async function Home() {
	const { data } = await getHomepage();

	return (
		<>
			<StructuredData data={data} />
			<Navigation />
			<Header data={data} />
			<main>
				<ErgotherapySection data={data} />
				<IBCLCSection data={data} />
				<ConsultationSection data={data} />
				<AboutSection data={data} />
				<AppointmentSection data={data} />
				<FundingSection data={data} />
				<Footer />
			</main>
		</>
	);
}
