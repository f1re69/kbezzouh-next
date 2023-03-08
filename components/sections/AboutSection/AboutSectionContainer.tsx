import React, { useContext } from "react";
import RefsContext from "../../context/RefsContext";
import AboutSectionPresentation from "./AboutSectionPresentation";
import { images } from "./images";
import profilePic from "../../../public/profilepic.jpg";
import { text } from "./text";

const AboutSectionContainer: React.FC = () => {
  const { aboutSectionRef } = useContext(RefsContext);

  return (
    <AboutSectionPresentation
      profileImage={profilePic}
      presentationText={text.presentation}
      skills={images}
      aboutSectionRef={aboutSectionRef}
    />
  );
};

export default AboutSectionContainer;
