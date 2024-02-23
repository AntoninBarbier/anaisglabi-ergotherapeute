import Header from './components/Sections/Header'
import ErgotherapySection from './components/Sections/Ergotherapy'
import AboutSection from './components/Sections/About'
import AppointmentSection from './components/Sections/Appointment'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<ErgotherapySection />
				<AboutSection />
				<AppointmentSection />
			</main>
		</>
	)
}
