import styled from "styled-components";
import Image from "next/image";

export const ContentDiv = styled.div`
  width: 33%;

  h3 {
    margin-bottom: 2rem;
  }

  & > img {
    float: left;
    margin-right: 1rem;
  }

  & > p {
    width: 70%;
    text-align: justify;
  }

  @media (max-width: 1050px) {
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    img {
      margin: 1rem 0;
    }

    h3 {
      margin: 2rem 0;
    }
  }
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
`;
