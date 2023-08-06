import React from "react";
import Image, { StaticImageData } from "next/image";
import { CardStyled } from "./CardStyled";
import { ContentWrapper } from "./CardElements";

interface CardProps {
  certification: {
    url: string;
    title: string;
    image: {
      file: StaticImageData;
      alt: string;
      width: number;
      height: number;
    };
    desc: string;
  };
}

const Card: React.FC<CardProps> = ({ certification }) => {
  return (
    <CardStyled className="card clearfix">
      <a href={certification.url} target="_blank" rel="noreferrer">
        <ContentWrapper>
          <h3>{certification.title}</h3>
          <Image
            src={certification.image.file}
            alt={certification.image.alt}
            // width={certification.image.width}
            // height={certification.image.height}
          />
        </ContentWrapper>
      </a>
      <p>{certification.desc}</p>
    </CardStyled>
  );
};

export default Card;
