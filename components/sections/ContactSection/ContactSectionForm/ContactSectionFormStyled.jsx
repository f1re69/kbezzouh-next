import styled from "styled-components";

export const ContactSectionFormStyled = styled.div`
  section {
    background-color: "red";
    color: blue;
  }
  .bet-loader {
    display: "block";
    margin: "0 auto";
  }
  .response {
    display: inline;
    margin-left: 1rem;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .response-dismiss {
    opacity: 0;
  }
`;
