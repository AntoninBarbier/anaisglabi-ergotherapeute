import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ErgotherapySection from "./components/Ergotherapy";
import ConsultationSection from "./components/Consultation";
import AboutSection from "./components/About";
import AppointmentSection from "./components/Appointment";
import FundingSection from "./components/Funding";
import Footer from "./components/Footer";

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
