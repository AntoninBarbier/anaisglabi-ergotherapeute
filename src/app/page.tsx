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

export default function Home() {
	return (
		<>
			<StructuredData />
			<Navigation />
			<Header />
			<main>
				<ErgotherapySection />
				<IBCLCSection />
				<ConsultationSection />
				<AboutSection />
				<AppointmentSection />
				<FundingSection />
				<Footer />
			</main>
		</>
	);
}
