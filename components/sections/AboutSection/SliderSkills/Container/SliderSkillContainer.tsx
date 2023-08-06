import React from "react";
import SliderSkillPresentation from "../Presentation/SliderSkillPresentation";

interface SliderSkillProps {
  imagesTwite: {
    src: string;
    alt: string;
  }[];
}

const SliderSkillContainer: React.FC<SliderSkillProps> = ({ imagesTwite }) => {
  // Ici, nous pouvons ajouter toute la logique nécessaire et la passer en tant que props

  return <SliderSkillPresentation imagesTwite={imagesTwite} />;
};

export default SliderSkillContainer;
