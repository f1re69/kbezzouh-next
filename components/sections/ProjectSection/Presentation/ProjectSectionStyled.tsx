import styled from "styled-components";

export const ProjectSectionStyled = styled.section`
  background-color: #fcf5ef;
  .square {
    display: inline-block;
    margin-right: 1rem;
  }
  .square img {
    max-width: 100%;
    height: 20rem;
  }
  div.content {
    width: 66%;
    text-align: center;
  }
  h2,
  h3 {
    color: #222222;
  }
  .container .overlay h3 {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 33%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
