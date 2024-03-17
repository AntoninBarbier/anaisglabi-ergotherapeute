import Navigation from "./components/Navigation";
import Header from "./components/Sections/Header";
import ErgotherapySection from "./components/Sections/Ergotherapy";
import ConsultationSection from "./components/Sections/Consultation";
import AboutSection from "./components/Sections/About/index";
import AppointmentSection from "./components/Sections/Appointment/index";
import FundingSection from "./components/Sections/Funding/index";
import Footer from "./components/Sections/Footer/index";

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
