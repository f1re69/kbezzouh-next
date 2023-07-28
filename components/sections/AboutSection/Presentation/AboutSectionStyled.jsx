import styled from "styled-components";

export const AboutSectionStyled = styled.section`
  align-content: flex-start;
  background-color: #3fabaf;
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 2.7rem;
  }
  div.content {
    width: 33%;
    & h3 {
      margin-bottom: 2rem;
    }
    & img {
      float: left;
      margin-right: 1rem;
    }
    & p {
      width: 70%;
      text-align: justify;
    }

    .profile-image {
      border-radius: 50%;
    }
  }

  @media (max-width: 1050px) {
    div.content {
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
  }
`;
