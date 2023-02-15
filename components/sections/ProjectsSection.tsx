import React from "react";

const ProjectsSection: React.FC = () => {
	return (
		<div>
			<div className="anchor">
				<a className="anchor-projects">&nbsp;</a>
				<h2 className="top-title">Mes projets</h2>
			</div>

			<div className="content">
				<div className="square streamy">
					<div className="container">
						<img
							className="streamy"
							src="./img/projects/streamy.jpg"
							alt="Streamy"
						/>
						<div className="overlay">
							<h3>Projet Streamy</h3>
							<a
								href="https://github.com/f1re69/Streamy"
								className="button overlay"
								target="_blank"
							>
								View on Github
							</a>
						</div>
					</div>
				</div>
				<div className="square streamy">
					<div className="container">
						<img
							className="natura"
							src="./img/projects/natura.jpg"
							alt="Natura"
						/>
						<div className="overlay">
							<h3>Projet Natura</h3>
							<a
								href="https://github.com/f1re69/Natura"
								className="button overlay"
								target="_blank"
							>
								View on Github
							</a>
							<a
								href="https://natura.now.sh/"
								className="button overlay"
								target="_blank"
							>
								View live demo
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
