import styled from "styled-components";

export const CardStyled = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 1rem;

  h3 {
    margin: 0 0rem 4rem 2rem;
    color: #222222;
  }

  img {
    min-width: 7rem;
    width: 15%;
    height: 15%;
    float: left; // Utilisation de float pour positionner l'image
    margin-right: 5rem;

    @media (max-width: 715px) {
      margin-right: 1rem;
    }
  }
`;
