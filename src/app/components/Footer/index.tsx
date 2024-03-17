const Footer = () => {
	return (
		<footer className='content-container flex flex-wrap gap-[10px] justify-center md:justify-between items-center text-primary rounded-[20px] mx-4 md:mx-8 mb-8 py-4' style={{ backgroundImage: "linear-gradient(135deg, #FFE3E1 0%, #FFF5E4 100%)" }}>
			<span className='md:col-start-2 text-center'>
				Site conçu et réalisé par{" "}
				<a className='underline' href='https://www.linkedin.com/in/antonin-barbier/' target='_blank'>
					Antonin Barbier
				</a>
			</span>
			<span className='font-bold'>2024</span>
		</footer>
	);
};

export default Footer;
