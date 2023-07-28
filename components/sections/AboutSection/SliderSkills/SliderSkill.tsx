import React from "react";
import Image from "next/image";
import { SliderSkillStyled } from "./SliderSkillStyled";

interface SliderSkillProps {
  imagesTwite: {
    src: string;
    alt: string;
  }[];
}

const SliderSkill: React.FC<SliderSkillProps> = ({ imagesTwite }) => {
  return (
    <SliderSkillStyled>
      <h3>Mes compétences</h3>
      <div className="main-slider">
        <div className="customer-logos slider">
          {imagesTwite.map((skill, index) => (
            <div className="slide" key={index}>
              <Image src={skill.src} alt={skill.alt} width={70} height={70} />
            </div>
          ))}
        </div>
      </div>
    </SliderSkillStyled>
  );
};

export default SliderSkill;
