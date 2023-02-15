import React, { useContext } from "react";
import RefsContext from "../context/RefsContext";

const AboutSection: React.FC = () => {
	const { aboutSectionRef } = useContext(RefsContext);

	return (
		<section id="about" ref={aboutSectionRef}>
			<div className="anchor">
				<a className="anchor-about">&nbsp;</a>
				<h2 className="top-title">A propos de moi</h2>
			</div>
			<div className="content">
				<h3>Qui suis-je ?</h3>
				<img
					src="img/profile.jpg"
					alt="Profile image"
					className="profile-image"
				/>
				<p>
					Je suis développeur Web et je vis à Lyon. Mon métier est une source de
					plaisir, j'aime aussi faire du sport, de la méditation et je suis
					aussi passionné par les mangas et les jeux-vidéos.
				</p>
			</div>
			<div className="container skills">
				<h3>Mes compétences</h3>
				<div className="main-slider">
					<div className="customer-logos slider">
						<div className="slide">
							<img alt="Angular" src="./img/logo/skills/angular.png" />
						</div>
						<div className="slide">
							<img alt="React.js" src="./img/logo/skills/reactjs.png" />
						</div>
						<div className="slide">
							<img alt="JavaScript" src="./img/logo/skills/javascript.png" />
						</div>
						<div className="slide">
							<img alt="TypeScript" src="./img/logo/skills/typescript.png" />
						</div>
						<div className="slide">
							<img alt="Node.js" src="./img/logo/skills/nodejs.png" />
						</div>
						<div className="slide">
							<img alt="Java" src="./img/logo/skills/java.png" />
						</div>
						<div className="slide">
							<img alt="Sass" src="./img/logo/skills/sass.png" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
