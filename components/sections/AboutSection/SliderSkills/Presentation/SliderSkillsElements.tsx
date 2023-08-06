import styled from "styled-components";

export const MainSlider = styled.div`
  width: 42rem;
  overflow: hidden;
  background: #000000a1;
  box-shadow: 0 0 9px 4px rgba(0, 0, 0, 0.66);
  margin-top: 2rem;
  display: flex;
  position: relative;

  &::before,
  &::after {
    background: linear-gradient(
      to right,
      #00000030 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 100%;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;

export const CustomerLogos = styled.div`
  animation: autoSlide 10s linear infinite;
  display: flex;
  padding: 1rem;
`;

export const Slide = styled.div`
  border-left: 1px solid rgba(255, 255, 255, 0.603);
  img {
    padding: 0 10px;
    width: 70px;
  }
`;
