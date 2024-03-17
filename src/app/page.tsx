import Navigation from "./components/Navigation";
import Header from "./components/Sections/Header";
import ErgotherapySection from "./components/Sections/ergotherapy";
import ConsultationSection from "./components/Sections/Consultation";
import AboutSection from "./components/Sections/About";
import AppointmentSection from "./components/Sections/Appointment";
import FundingSection from "./components/Sections/Funding";
import Footer from "./components/Sections/Footer";

export default function Home() {
	return (
		<>
			<Navigation />
			<Header />
			<main>
				<ErgotherapySection />
				<ConsultationSection />
				<AboutSection />
				<AppointmentSection />
				<FundingSection />
				<Footer />
			</main>
		</>
	);
}
