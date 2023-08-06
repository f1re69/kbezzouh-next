import React from "react";
import Image from "next/image";
import { SliderSkillStyled } from "./SliderSkillStyled";
import { MainSlider, CustomerLogos, Slide } from "./SliderSkillsElements";

interface SliderSkillPresentationProps {
  imagesTwite: {
    src: string;
    alt: string;
  }[];
}

const SliderSkillPresentation: React.FC<SliderSkillPresentationProps> = ({
  imagesTwite,
}) => {
  return (
    <SliderSkillStyled>
      <h3>Mes compétences</h3>
      <MainSlider>
        <CustomerLogos>
          {imagesTwite.map((skill, index) => (
            <Slide key={index}>
              <Image src={skill.src} alt={skill.alt} width={70} height={70} />
            </Slide>
          ))}
        </CustomerLogos>
      </MainSlider>
    </SliderSkillStyled>
  );
};

export default SliderSkillPresentation;
